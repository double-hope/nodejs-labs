import React from 'react';
import styles from './link.module.scss';
import { LinkProps } from './types';
import Link from 'next/link';

const CustomLink = ({href, text}: LinkProps) => {
  return (
    <Link className={styles.link} href={href}>
        {text}
    </Link>
  )
}

export { CustomLink };