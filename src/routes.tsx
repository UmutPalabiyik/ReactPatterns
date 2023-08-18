import { ReactNode, lazy, LazyExoticComponent } from 'react';

const Paths = {
    HOME: '/',
    COMPOUND: '/test-page',
};

// routes
/* const Layout = lazy(() => import('./routes/Layout'));
const CompoundPattern = lazy(() => import('./routes/CompoundPattern')) */
import Layout from './routes/Layout';
import CompoundPattern from './routes/CompoundPattern';

type TRoute = {
    name: string;
    path: string;
    element: JSX.Element;
    Fallback: ReactNode | null;
    children: any
};

const routes = [
    {
        path: Paths.HOME,
        element: <Layout />,
        Fallback: null,
        children: [
            {
              path: "compound-pattern",
              element: <CompoundPattern />,
            },
          ],
    },
    /*     {
            name: 'compound',
            path: Paths.COMPOUND,
            element: "PersonProfile",
            Fallback: null,
        }, */
] as TRoute[];


export default routes