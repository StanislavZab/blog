import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
    const { t, i18n } = useTranslation('about');

    return (
        <div>
            <h1>{t('О сайте')}</h1>
        </div>
    );
};

export default AboutPage;
