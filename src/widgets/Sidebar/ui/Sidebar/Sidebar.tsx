import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collaosed, setCollapset] = useState(false);

    const onToggle = () => {
        setCollapset((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collaosed }, [className])}>
            { /* <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>toggle</button>*/ }
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.lang} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
