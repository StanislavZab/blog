import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;

export const getArticleDetailsCommentError = (state: StateSchema) => state.articleDetailsComments?.error;
