import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage: React.FC = () => {
    const { t } = useTranslation('adminka');

    return (
        <Page>
            <h1>{t('Админ панель')}</h1>
        </Page>
    );
};

export default AdminPanelPage;
