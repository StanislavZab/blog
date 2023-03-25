import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChang?: (value: Country) => void;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: React.FC<CountrySelectProps> = memo((props) => {
    const {
        className,
        value,
        readonly,
        onChang,
    } = props;

    const { t } = useTranslation();

    const onChangHandler = useCallback((value: string) => {
        onChang?.(value as Country);
    }, [onChang]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                value={value}
                onChange={onChangHandler}
                label={t('Укажите страну') as string}
                options={options}
                readonly={readonly}
            />
        </div>
    );
});
