import { createAsyncThunk } from '@reduxjs/toolkit';
import { URLSearchParams } from 'url';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.setOrder(searchParams.get('order') as SortOrder ?? ''));
            dispatch(articlesPageActions.setSort(searchParams.get('sort') as ArticleSortField ?? ''));
            dispatch(articlesPageActions.setSearch(searchParams.get('search') ?? ''));
            dispatch(articlesPageActions.setType(searchParams.get('type') as ArticleType ?? ''));
            dispatch(articlesPageActions.initialState());
            dispatch(fetchArticlesList({}));
        }
    },
);
