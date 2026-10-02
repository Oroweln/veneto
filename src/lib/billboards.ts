/** Splits a billboard statement into lines, one per sentence: 'Made here. Trusted everywhere.' → two lines. */
export const toLines = (text: string): string[] => text.split(/(?<=[.?!])\s+/);
