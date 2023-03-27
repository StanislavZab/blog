import { getUserAuthData } from 'entities/User/model';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
