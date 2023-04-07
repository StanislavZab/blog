import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsRecommendations?.isLoading;

export const getArticleDetailsRecommendationsError = (state: StateSchema) => state.articleDetailsRecommendations?.error;
