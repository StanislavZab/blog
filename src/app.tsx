import { Route, Routes, Link } from "react-router-dom";
import { Suspense, useState } from 'react';
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/aboutPage.async";
import { MainPageAsync } from "./pages/MainPage/mainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;