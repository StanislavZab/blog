import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlespage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
