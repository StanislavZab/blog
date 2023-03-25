import { getUserAuthData } from 'entities/User/model';
import {
    FC, memo, Suspense, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routerConfig } from './RouterConfig';

const AppRouter: FC = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routerConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
