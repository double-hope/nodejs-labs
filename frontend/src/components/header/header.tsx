import React from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../avatar';
import { SizeEnum } from '@/common';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <FontAwesomeIcon icon={faBars} />
      <Avatar size={SizeEnum.SMALL} />
    </div>
  )
}

export { Header };