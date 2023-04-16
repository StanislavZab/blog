import {
    FC, memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from './model/selectors/getSidebarItems';

import cls from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
};

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collaosed, setCollapset] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapset((prev) => !prev);
    };

    const itemList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collaosed}
            key={item.path}
        />
    )), [collaosed, sidebarItemList]);

    return (
        <aside data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collaosed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                { collaosed ? '>' : '<' }
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.lang} />
                <LangSwitcher short={collaosed} className={cls.lang} />
            </div>
        </aside>
    );
});
