// Generates src/assets/img/map-healthlab.jpg: a static OpenStreetMap excerpt centred on the practice.
// The site serves this image itself, so visitors' browsers never contact a map service (GDPR).
// It downloads a few dozen tiles once; run it only when the address changes.
//
// macOS only:  clang -fobjc-arc -framework AppKit scripts/generate-map.m -o /tmp/ortho-map && /tmp/ortho-map
// Map data © OpenStreetMap contributors (ODbL) – the page shows this attribution next to the image.
#import <AppKit/AppKit.h>
#include <math.h>

static const double LAT = 47.7753442, LNG = 13.0696156; // Alpenstraße 99 (site.ordination.geo)
static const int ZOOM = 15, W = 1800, H = 640, TILE = 256;

static NSData *fetch(NSString *url) {
  NSMutableURLRequest *req = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:url]];
  [req setValue:@"ortho-schrader-website/1.0 (static map, one-off build)" forHTTPHeaderField:@"User-Agent"];
  __block NSData *out = nil;
  dispatch_semaphore_t done = dispatch_semaphore_create(0);
  [[[NSURLSession sharedSession] dataTaskWithRequest:req completionHandler:^(NSData *d, NSURLResponse *r, NSError *e) {
    if (!e && [(NSHTTPURLResponse *)r statusCode] == 200) out = d;
    dispatch_semaphore_signal(done);
  }] resume];
  dispatch_semaphore_wait(done, DISPATCH_TIME_FOREVER);
  return out;
}

int main(void) {
  @autoreleasepool {
    // Pixel position of the practice in the global Web Mercator grid at this zoom.
    double n = pow(2, ZOOM) * TILE;
    double px = (LNG + 180) / 360 * n;
    double r = LAT * M_PI / 180;
    double py = (1 - log(tan(r) + 1 / cos(r)) / M_PI) / 2 * n;
    double left = px - W / 2.0, top = py - H / 2.0;
    int tx0 = (int)floor(left / TILE), ty0 = (int)floor(top / TILE);
    int tx1 = (int)floor((left + W) / TILE), ty1 = (int)floor((top + H) / TILE);

    NSBitmapImageRep *rep = [[NSBitmapImageRep alloc] initWithBitmapDataPlanes:NULL pixelsWide:W pixelsHigh:H
      bitsPerSample:8 samplesPerPixel:4 hasAlpha:YES isPlanar:NO colorSpaceName:NSCalibratedRGBColorSpace bytesPerRow:0 bitsPerPixel:0];
    [NSGraphicsContext saveGraphicsState];
    [NSGraphicsContext setCurrentContext:[NSGraphicsContext graphicsContextWithBitmapImageRep:rep]];
    for (int ty = ty0; ty <= ty1; ty++) {
      for (int tx = tx0; tx <= tx1; tx++) {
        NSData *d = fetch([NSString stringWithFormat:@"https://tile.openstreetmap.org/%d/%d/%d.png", ZOOM, tx, ty]);
        if (!d) { fprintf(stderr, "Tile %d/%d failed\n", tx, ty); return 1; }
        NSImage *tile = [[NSImage alloc] initWithData:d];
        // AppKit's origin is bottom-left, so flip the y position.
        double x = tx * TILE - left, y = H - (ty * TILE - top) - TILE;
        [tile drawInRect:NSMakeRect(x, y, TILE, TILE) fromRect:NSZeroRect operation:NSCompositingOperationCopy fraction:1];
      }
    }
    [NSGraphicsContext restoreGraphicsState];

    [[NSFileManager defaultManager] createDirectoryAtPath:@"src/assets/img" withIntermediateDirectories:YES attributes:nil error:nil];
    NSData *jpg = [rep representationUsingType:NSBitmapImageFileTypeJPEG properties:@{ NSImageCompressionFactor: @0.7 }];
    [jpg writeToFile:@"src/assets/img/map-healthlab.jpg" atomically:YES];
    printf("Wrote src/assets/img/map-healthlab.jpg (%dx%d, %d tiles)\n", W, H, (tx1 - tx0 + 1) * (ty1 - ty0 + 1));
  }
  return 0;
}
