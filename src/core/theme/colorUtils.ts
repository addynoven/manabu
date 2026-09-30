/**
 * Safely converts any color (hex3, hex6, hex8, or rgb) into a fully-supported `rgba(r, g, b, opacity)` string.
 * This avoids Android hardware-rendering line artifacts caused by 8-digit hex strings (`#RRGGBBAA`),
 * and safely handles shorthand hex values (`#FFF`), full hex values (`#FFFFFF`), or raw color formats.
 */
export function withOpacity(color: string, opacity: number): string {
  if (!color) return `rgba(0, 0, 0, ${opacity})`;

  // Handle rgb / rgba input strings
  if (color.startsWith('rgb')) {
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      return `rgba(${match[0]}, ${match[1]}, ${match[2]}, ${opacity})`;
    }
  }

  // Clean hex string
  let hex = color.replace('#', '').trim();

  // Convert 3-character hex (e.g. "F00") to 6-character hex ("FF0000")
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  // Strip existing alpha channel if 8-character hex
  if (hex.length === 8) {
    hex = hex.substring(0, 6);
  }

  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  }

  return color;
}
