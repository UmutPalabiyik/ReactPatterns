import { lazy, LazyExoticComponent, ReactNode } from 'react';

const Paths = {
    HOME: '/',
    COMPOUND: '/test-page',
};


type TRoute = {
    name: string;
    path: string;
    Component: /* LazyExoticComponent<() => JSX.Element> || */ any;
    Fallback: ReactNode | null;
};

const routes = [
    {
        name: 'compound',
        path: Paths.COMPOUND,
        Component: "PersonProfile",
        Fallback: null,
    },
] as TRoute[];