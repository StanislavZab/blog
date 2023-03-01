import { InputHTMLAttributes, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    label?: string;
    onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        label,
        onChange,
        type = 'text',
        id,
        name,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames('', {}, [cls.wrapper, cls.floating])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                id={id}
                name={name}
                placeholder="alexander@itchief.ru"
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
