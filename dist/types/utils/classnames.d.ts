type ClassItems = string | ClassItems[] | {
    [key: string]: boolean | undefined | null;
};
export default function classnames(...items: ClassItems[]): string;
export {};
