import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};
