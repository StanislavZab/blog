import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleView, ArticleViewSelector, ArticleSortSelector, ArticleSortField, ArticleTypeTabs,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: React.FC<ArticlesPageFiltersProps> = memo((props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(articlesPageActions.setSearch(e.target.value));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setType(type));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.articlespagefilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск') as string}
                    type="search"
                    className={cls.input}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
