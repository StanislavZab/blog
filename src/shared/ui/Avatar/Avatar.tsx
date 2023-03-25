import { CSSProperties, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            style={style}
        />
    );
};
