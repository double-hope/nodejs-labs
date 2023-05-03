import React from 'react';
import { NavigationItemProps } from './types';
import styles from './styles.module.scss';
import Link from 'next/link';

const NavigationItem:  React.FC<NavigationItemProps> = ({content, href}) => {
  return (
    <Link className={styles.itemWrapper} href={href}>
        {content}
    </Link>
  )
}

export { NavigationItem };