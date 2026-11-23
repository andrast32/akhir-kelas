export const CLASS_LIST = [
    '7 C',
    '8 A',
    '8 C',
    '8 E',
    '9 B',
    '9 C',
] as const;

export type ClassName = (typeof CLASS_LIST)[number];