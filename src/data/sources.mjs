// Sources shown under "Quellen & weiterführende Informationen" on medical pages.
// Only guidelines that were looked up in the AWMF register (register.awmf.org) on 3 November 2026.
// A page without a fitting guideline simply shows no sources – never add one that does not match.

const awmf = (id, title) => ({ title, meta: `AWMF-Register ${id}`, url: `https://register.awmf.org/de/leitlinien/detail/${id}` });

export const guidelines = {
  gonarthrose: awmf('187-050', 'S3-Leitlinie Gonarthrose'),
  knieTep: awmf('187-004', 'S2k-Leitlinie Indikation Knieendoprothese'),
  koxarthrose: awmf('187-049', 'S2k-Leitlinie Koxarthrose'),
  hueftTep: awmf('187-001', 'S3-Leitlinie Indikationskriterien zur Hüfttotalendoprothese bei Coxarthrose (EKIT-Hüfte)'),
  kreuzschmerz: awmf('nvl-007', 'Nationale VersorgungsLeitlinie Nicht-spezifischer Kreuzschmerz'),
  impingement: awmf('187-060', 'S2e-Leitlinie Subakromiales Impingement'),
  rotatorenmanschette: awmf('187-055', 'S2k-Leitlinie Rotatorenmanschettenruptur'),
  karpaltunnel: awmf('005-003', 'S3-Leitlinie Diagnostik und Therapie des Karpaltunnelsyndroms'),
  hallux: awmf('187-051', 'S2e-Leitlinie Hallux valgus'),
};

export const oegkWahlarzt = {
  title: 'Österreichische Gesundheitskasse: WAHonline – Einreichung von Wahlarztrechnungen',
  meta: 'ÖGK',
  url: 'https://www.oegk.at/cdscontent/?contentid=10007.880165&portal=oegkvpportal',
};

const g = guidelines;

// Keyed by page slug (conditions under /beschwerden/, treatments under /behandlungen/, guides under /beschwerden/).
export const sourcesFor = {
  // Beschwerden
  knieschmerzen: [g.gonarthrose, g.knieTep],
  hueftschmerzen: [g.koxarthrose, g.hueftTep],
  rueckenschmerzen: [g.kreuzschmerz],
  schulterschmerzen: [g.impingement, g.rotatorenmanschette],
  handschmerzen: [g.karpaltunnel],
  fussschmerzen: [g.hallux],
  kniearthrose: [g.gonarthrose, g.knieTep],
  hueftarthrose: [g.koxarthrose, g.hueftTep],
  // Behandlungen
  knieprothese: [g.knieTep, g.gonarthrose],
  hueftprothese: [g.hueftTep, g.koxarthrose],
  arthrosetherapie: [g.gonarthrose, g.koxarthrose],
  hyaluronsaeure: [g.gonarthrose],
  'kortison-infiltration': [g.gonarthrose, g.impingement],
  kniearthroskopie: [g.gonarthrose],
  handchirurgie: [g.karpaltunnel],
  fusschirurgie: [g.hallux],
  'wirbelsaeulen-infiltration': [g.kreuzschmerz],
};

// Second part of the author line ("Facharzt für … · <focus> · Zuletzt aktualisiert …"): what someone in Salzburg
// would search for on that page. Only what he actually does – no "Spezialist" claims.
const kneeHip = 'Orthopäde für Knie und Hüfte in Salzburg';
const focus = {
  knieschmerzen: kneeHip,
  hueftschmerzen: kneeHip,
  kniearthrose: kneeHip,
  hueftarthrose: kneeHip,
  arthrosetherapie: kneeHip,
  knieprothese: 'Knie- und Hüftprothetik in Salzburg',
  hueftprothese: 'Knie- und Hüftprothetik in Salzburg',
  kniearthroskopie: 'Kniechirurgie in Salzburg',
  handschmerzen: 'Handchirurgie in Salzburg',
  handchirurgie: 'Handchirurgie in Salzburg',
  fussschmerzen: 'Fußchirurgie in Salzburg',
  fusschirurgie: 'Fußchirurgie in Salzburg',
  sportmedizin: 'Sportmediziner in Salzburg',
  operation: 'Belegarzt an der Privatklinik Wehrle-Diakonissen',
};
export const focusFor = (slug) => focus[slug] ?? 'Wahlarzt für Orthopädie in Salzburg';
