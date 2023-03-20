import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreaterType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreater: ActionCreaterType<Return, Arg, RejectedValue>;

    constructor(actionCreater: ActionCreaterType<Return, Arg, RejectedValue>) {
        this.actionCreater = actionCreater;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreater(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
