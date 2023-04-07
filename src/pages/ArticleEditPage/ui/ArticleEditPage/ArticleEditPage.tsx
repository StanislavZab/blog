import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: React.FC<ArticleEditPageProps> = memo((props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.articleeditpage, {}, [className])}>
            {isEdit ? `Редактирование статьи с ID = ${id}` : 'Создание новой статьи'}
        </Page>
    );
});

export default ArticleEditPage;
