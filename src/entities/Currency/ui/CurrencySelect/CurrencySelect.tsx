import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currents } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currents;
    readonly?: boolean;
    onChang?: (value: Currents) => void;
}

const options = [
    { value: Currents.EUR, content: Currents.EUR },
    { value: Currents.RUB, content: Currents.RUB },
    { value: Currents.USD, content: Currents.USD },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
    const {
        className,
        value,
        readonly,
        onChang,
    } = props;

    const { t } = useTranslation();

    const onChangHandler = useCallback((value: string) => {
        onChang?.(value as Currents);
    }, [onChang]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                value={value}
                onChange={onChangHandler}
                label={t('Укажите валюту') as string}
                options={options}
                readonly={readonly}
            />
        </div>
    );
});
