
type Mods = Record<string, boolean | string >;

const obj: Mods = {
    'hovered': false
}

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
    ]
    .join(' ')
}