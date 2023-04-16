import { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data: Comment = {
    id: '1',
    text: '123',
    user: {
        id: '1',
        username: '123',
    },
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                    username: '123',
                },
            },
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('123');
        console.log(result);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('123');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
