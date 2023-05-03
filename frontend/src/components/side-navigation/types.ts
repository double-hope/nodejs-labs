import { ReactNode, Dispatch, SetStateAction } from 'react';

export type SideNavigationProps = {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}