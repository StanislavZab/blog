import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('У Вас нет доступа к этой странице')}</h1>
        </Page>
    );
};

export default ForbiddenPage;
