import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { IconifyLinkProps } from './types';

const IconifyLink: React.FC<IconifyLinkProps> = ({href}) => {
  return (
    <div className={styles.linkWrapper}>
        <div>
            <Link href={href}><FontAwesomeIcon icon={faAdd} /></Link>
        </div>
    </div>
  )
}

export { IconifyLink };