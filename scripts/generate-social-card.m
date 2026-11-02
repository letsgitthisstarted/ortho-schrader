// Optional macOS asset generator. The PNG is checked in; normal builds need only Node.
// clang -framework AppKit scripts/generate-social-card.m -o /tmp/ortho-social-card
// /tmp/ortho-social-card (run from the project root)
#import <AppKit/AppKit.h>

static NSColor *colour(CGFloat r, CGFloat g, CGFloat b) {
    return [NSColor colorWithSRGBRed:r/255 green:g/255 blue:b/255 alpha:1];
}
static void text(NSString *value, CGFloat x, CGFloat y, CGFloat size, BOOL serif, NSColor *color) {
    NSFont *font = [NSFont fontWithName:serif ? @"Georgia" : @"HelveticaNeue" size:size];
    [value drawAtPoint:NSMakePoint(x,y) withAttributes:@{NSFontAttributeName:font, NSForegroundColorAttributeName:color}];
}
int main(void) { @autoreleasepool {
    NSBitmapImageRep *bitmap = [[NSBitmapImageRep alloc] initWithBitmapDataPlanes:NULL pixelsWide:1200 pixelsHigh:630 bitsPerSample:8 samplesPerPixel:4 hasAlpha:YES isPlanar:NO colorSpaceName:NSDeviceRGBColorSpace bytesPerRow:0 bitsPerPixel:0];
    [NSGraphicsContext saveGraphicsState];
    [NSGraphicsContext setCurrentContext:[NSGraphicsContext graphicsContextWithBitmapImageRep:bitmap]];
    NSColor *sky = colour(169,195,214);
    [colour(22,41,61) setFill];
    NSRectFill(NSMakeRect(0,0,1200,630));
    [[sky colorWithAlphaComponent:0.15] setStroke];
    for (int radius=190; radius<=320; radius+=65) {
        NSBezierPath *circle = [NSBezierPath bezierPathWithOvalInRect:NSMakeRect(1160-radius,315-radius,2*radius,2*radius)];
        [circle setLineWidth:2]; [circle stroke];
    }
    text(@"THOMAS SCHRADER",76,516,24,NO,sky);
    text(@"Orthopädie in Salzburg,",72,351,64,YES,NSColor.whiteColor);
    text(@"mit Zeit für Sie.",72,267,64,YES,sky);
    text(@"Orthopädie & Unfallchirurgie · Wahlarzt",76,174,28,NO,NSColor.whiteColor);
    text(@"healthlab · Alpenstraße 99",76,126,25,NO,sky);
    text(@"ortho-schrader.com",76,54,22,NO,NSColor.whiteColor);
    [NSGraphicsContext restoreGraphicsState];
    NSError *error = nil;
    if (![[NSFileManager defaultManager] createDirectoryAtPath:@"src/assets/img" withIntermediateDirectories:YES attributes:nil error:&error]) { NSLog(@"%@",error); return 1; }
    NSData *data = [bitmap representationUsingType:NSBitmapImageFileTypePNG properties:@{}];
    if (![data writeToFile:@"src/assets/img/social-card.png" atomically:YES]) return 1;
    puts("Generated src/assets/img/social-card.png (1200 x 630)");
    return 0;
} }
