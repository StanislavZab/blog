import { InputHTMLAttributes, memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        label,
        readonly,
        onChange,
        type = 'text',
        id,
        name,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames('', mods, [className, cls.wrapper, cls.floating])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                id={id}
                name={name}
                {...otherProps}
            />
            <label
                className={cls.label}
                htmlFor={name}
            >
                {label}
            </label>
        </div>
    );
});
