import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = memo((props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div {...otherProps} className={classNames(cls.card, {}, [className])}>
            {children}
        </div>
    );
});
