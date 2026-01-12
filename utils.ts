export const obscurePrice = (price: number): string => {
    const formatted = price.toLocaleString('vi-VN');
    const chars = formatted.split('');
    const digitIndices = chars.map((c, i) => /\d/.test(c) ? i : -1).filter(i => i !== -1);

    // Ensure we have digits
    if (digitIndices.length === 0) return formatted;

    // Always obscure the first digit
    chars[digitIndices[0]] = '?';

    // Obscure additional digits based on a deterministic pattern (so it doesn't flicker on re-renders)
    // We use the price value itself to decide the pattern
    const pattern = price % 4;

    if (digitIndices.length > 1) {
        if (pattern === 0) {
            // ??0.000 (Obscure 2nd digit)
            chars[digitIndices[1]] = '?';
        } else if (pattern === 1 && digitIndices.length > 2) {
            // ?5?.000 (Obscure 3rd digit)
            chars[digitIndices[2]] = '?';
        } else if (pattern === 2 && digitIndices.length > 3) {
            // ?50.?00 (Obscure 4th digit)
            chars[digitIndices[3]] = '?';
        }
        // pattern 3: Just the first digit
    }

    return chars.join('');
};
