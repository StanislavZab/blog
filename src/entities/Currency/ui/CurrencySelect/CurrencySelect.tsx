import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currents } from '../../model/types/currency';

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
        <ListBox
            className={classNames('', {}, [className])}
            readonly={readonly}
            onChange={onChangHandler}
            items={options}
            value={value}
            defaultValue={t('Выберите валюту') as string}
            label={t('Укажите валюту') as string}
            direction="top left"
        />
    );
});
