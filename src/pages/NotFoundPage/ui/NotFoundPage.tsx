import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

type NotFoundPageProps = {
    className?: string;
};

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
