import React from 'react';
import { Header } from '../header';
import { DefaultLayoutProps } from './types';
import styles from './default-layout.module.scss';

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <>
        <Header />
        <div className={styles.contentWrapper}>
          {children}
        </div>
    </>
  )
}

export { DefaultLayout }