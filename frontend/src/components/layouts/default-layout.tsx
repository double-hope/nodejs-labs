import React from 'react';
import { Header } from '../header';
import { DefaultLayoutProps } from './types';



const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export { DefaultLayout }