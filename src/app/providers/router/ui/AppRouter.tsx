import { log } from "console";
import { fchmod } from "fs";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "./RouterConfig";

const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ element, path }) => (
                    <Route
                        key = {path}
                        path = {path}
                        element = {(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;

