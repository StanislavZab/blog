import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
