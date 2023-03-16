import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App: React.FC = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
        dispatch(userActions.initAuthData());
    }, [dispatch, theme]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
