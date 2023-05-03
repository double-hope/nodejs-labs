import React from 'react';
import { NavigationItemProps } from './types';
import styles from './styles.module.scss';

const NavigationItem:  React.FC<NavigationItemProps> = ({content}) => {
  return (
    <div className={styles.itemWrapper}>
        {content}
    </div>
  )
}

export { NavigationItem };