import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon: React.FC<IconProps> = memo((props) => {
    const {
        className,
        Svg,
    } = props;

    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
});
