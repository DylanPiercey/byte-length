/*
 * Calculate the byte lengths for utf8 encoded strings.
 */
export function byteLength(
  str: string | { toString(): string; [x: string]: any }
): number {
  if (!str) {
    return 0;
  }

  str = str.toString();
  let len = str.length;

  for (let i = str.length; i--; ) {
    const code = str.charCodeAt(i);
    if (0xdc00 <= code && code <= 0xdfff) {
      i--;
    }

    if (0x7f < code && code <= 0x7ff) {
      len++;
    } else if (0x7ff < code && code <= 0xffff) {
      len += 2;
    }
  }

  return len;
}
