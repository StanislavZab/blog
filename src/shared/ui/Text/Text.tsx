import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string | null;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: React.FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
