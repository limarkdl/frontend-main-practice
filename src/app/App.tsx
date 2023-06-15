import './styles/index.css';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
