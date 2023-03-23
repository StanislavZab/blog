import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(store, action: PayloadAction<User>) {
            store.authData = action.payload;
        },
        initAuthData(store) {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) store.authData = JSON.parse(user);
        },
        logout(store) {
            store.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
