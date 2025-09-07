import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingScreen from './Portifolio/Carregamnetopage';

//import Namoro from './Portifolio/Namoro';
// layouts 
 
import NotFound from './pages/Page404'; 
import Game from './projetos/jogo_da_velha'; 
// ----------------------------------------------------------------------


const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();
    const isDashboard = pathname.includes('/dashboard');

    return (
        <Suspense
            fallback={
                <LoadingScreen
                    sx={{
                        ...(!isDashboard && {
                            top: 0,
                            left: 0,
                            width: 1,
                            zIndex: 9999,
                            position: 'fixed'
                        })
                    }}
                />
            }
        >
            <Component {...props} />
        </Suspense>
    );
};


export default function Router() {

    return useRoutes([
        {
            path: '/',
            element: <MainLayoutNew to="/" />,
            children: [
                { path: '/', element: <LandingPageNew to="/" /> },
                {
                    path: 'components',
                    children: [
                        { path: '', element: <Navigate to="/components/all" /> },

                    ]
                },
                {path: 'portifolio', element: <Portifolio to="/portifolio" /> },
            ],
        },
        {
            path: '/404',
            element: <NotFound to="/404" />
        }, 
        {
            path: '/projetos/velha',
            element: <Game to="/projetos/velha" replace />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        }
    ]);
} 

// EXTERNAL  PAGE 
const MainLayoutNew = Loadable(lazy(() => import('./layouts/main 2.0/index')));
const LandingPageNew = Loadable(lazy(() => import('./pages/LandingPage2.0')));   
const Portifolio = Loadable(lazy(() => import('./pages/Portifolio')));   
//Portifolio 
//const Calendar = Loadable(lazy(() => import('./pages/dashboard/Calendar')));

//notion

 
