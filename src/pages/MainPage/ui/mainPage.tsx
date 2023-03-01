import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const OnChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
