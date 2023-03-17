import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
        });

        if (removeAfterUnmount) {
            return () => {
                Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(key);
                });
            };
        }

        return () => {};
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line
        <>
            {children}
        </>
    );
};
