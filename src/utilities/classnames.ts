type ClassItems = string | ClassItems[] | {[key: string]: boolean | undefined | null};

export default function classnames(...items: ClassItems[]): string {
    const classes: string[] = [];
    for (let i = 0; i < items.length; i += 1) {
        const item = items[i];

        if (Array.isArray(item)) {
            classes.push(classnames.apply(null, item));
        } else if (typeof item === 'object') {
            Object.entries(item).map(
                ([key, value]) => value ? classes.push(key) : true
            );
        } else if (typeof item === 'string') {
            classes.push(item.trim());
        }
    }

    return classes.join(' ');
};
