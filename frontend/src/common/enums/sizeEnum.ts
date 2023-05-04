export enum SizeEnum {
    SMALL = 'small',
    MIDDLE = 'middle',
    LARGE = 'large',
    X_LARGE = 'x_large',
}

export const SizeToNumber = {
    [SizeEnum.X_LARGE]: 300,
    [SizeEnum.LARGE]: 100,
    [SizeEnum.MIDDLE]: 70,
    [SizeEnum.SMALL]: 40,
}

