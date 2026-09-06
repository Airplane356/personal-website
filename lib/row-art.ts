/**
 * One abstract motif — a soft radial wash under a halftone dot field and a few
 * concentric arcs — recolored per company from a single brand hue.
 *
 * The art is generated as an inline SVG data URI, so a row's background costs no
 * network request: nothing to preload, and no stutter on first hover.
 *
 * Composition is fixed to the shape of a row (500x60, of which the bottom ~half
 * survives the `cover` crop): the wash and the arcs share one center placed low
 * and right, so the row reads as a single glow rather than two unrelated layers.
 * The left stays clear because the wash simply runs out of radius before it gets
 * there.
 */

export type RowArt = {
  /** Brand hue in degrees, 0-360. Saturation and lightness are pinned to pastel. */
  hue: number
  /** Which compositional variant of the shared motif to use. */
  variant?: number
  /** Per-row background-position override, if a variant crops badly. */
  position?: string
  /** Per-row background-size override. */
  size?: string
}

type Variant = {
  /**
   * Shared center of the wash and the arcs, in viewBox units, plus the wash's
   * radius. Kept in user space so it stays a true circle — in the default
   * objectBoundingBox units a 500x60 box stretches it into a flat ellipse.
   */
  cx: number
  cy: number
  glow: number
  /** Halftone pitch, dot radius, and screen angle. */
  pitch: number
  dot: number
  tilt: number
  /** Arc radii around the shared center. */
  arcs: number[]
}

const VARIANTS: Variant[] = [
  { cx: 432, cy: 50, glow: 150, pitch: 5.5, dot: 0.8, tilt: -12, arcs: [46, 74, 104] },
  { cx: 366, cy: 44, glow: 132, pitch: 5, dot: 0.7, tilt: 18, arcs: [38, 66, 96] },
  { cx: 470, cy: 56, glow: 172, pitch: 6.5, dot: 0.95, tilt: -28, arcs: [52, 88, 122] },
  { cx: 340, cy: 52, glow: 144, pitch: 6, dot: 0.85, tilt: 6, arcs: [44, 72, 100] },
]

export function rowArt({ hue, variant = 0 }: RowArt): string {
  const v = VARIANTS[variant % VARIANTS.length]

  // Pastel: the brand hue held at low saturation and high lightness, so the row
  // reads as "that company" without ever competing with the text.
  const wash = `hsl(${hue} 62% 76%)`
  const ink = `hsl(${hue} 45% 62%)`

  const arcs = v.arcs
    .map((r) => `<circle cx='${v.cx}' cy='${v.cy}' r='${r}'/>`)
    .join("")

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='60' viewBox='0 0 500 60' preserveAspectRatio='xMaxYMax slice'>
<defs>
<radialGradient id='w' gradientUnits='userSpaceOnUse' cx='${v.cx}' cy='${v.cy}' r='${v.glow}'>
<stop offset='0' stop-color='${wash}' stop-opacity='1'/>
<stop offset='.42' stop-color='${wash}' stop-opacity='.5'/>
<stop offset='1' stop-color='${wash}' stop-opacity='0'/>
</radialGradient>
<linearGradient id='b' x1='0' y1='0' x2='1' y2='0'>
<stop offset='0' stop-color='${wash}' stop-opacity='0'/>
<stop offset='.55' stop-color='${wash}' stop-opacity='.12'/>
<stop offset='1' stop-color='${wash}' stop-opacity='.3'/>
</linearGradient>
<linearGradient id='f' x1='0' y1='0' x2='1' y2='.5'>
<stop offset='0' stop-color='#000'/>
<stop offset='.42' stop-color='#0d0d0d'/>
<stop offset='.72' stop-color='#8a8a8a'/>
<stop offset='1' stop-color='#fff'/>
</linearGradient>
<mask id='m'><rect width='500' height='60' fill='url(#f)'/></mask>
<pattern id='d' width='${v.pitch}' height='${v.pitch}' patternUnits='userSpaceOnUse' patternTransform='rotate(${v.tilt})'>
<circle cx='${v.pitch / 2}' cy='${v.pitch / 2}' r='${v.dot}' fill='${ink}'/>
</pattern>
</defs>
<rect width='500' height='60' fill='url(#b)'/>
<rect width='500' height='60' fill='url(#w)'/>
<g mask='url(#m)'>
<rect width='500' height='60' fill='url(#d)' opacity='.62'/>
<g fill='none' stroke='${ink}' stroke-width='.9' opacity='.34'>${arcs}</g>
</g>
</svg>`

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}
