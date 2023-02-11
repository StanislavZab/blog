import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;
