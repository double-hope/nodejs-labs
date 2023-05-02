import React from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../avatar';
import { SizeEnum } from '@/common';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <FontAwesomeIcon icon={faBars} />
      <Avatar size={SizeEnum.SMALL} />
    </header>
  )
}

export { Header };