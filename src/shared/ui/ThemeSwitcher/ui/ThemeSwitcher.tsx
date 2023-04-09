import { FC, memo } from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LighIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '../../Button/Button';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LighIcon /> : <DarkIcon />}
        </Button>
    );
});
