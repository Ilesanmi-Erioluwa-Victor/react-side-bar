import { ReactNode } from 'react';
export type RouteType = {
    element: ReactNode,
    state: string,
    index?: string,
    path?: string,
    child? : RouteType[],
}
