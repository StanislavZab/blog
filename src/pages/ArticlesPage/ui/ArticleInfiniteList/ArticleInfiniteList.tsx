import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: React.FC<ArticleInfiniteListProps> = memo((props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    // useInitialEffect(() => {
    //     dispatch(initArticlesPage(searchParams));
    // });

    if (error) {
        return <Text title={t('Ошибка при загрузке статей') as string} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
