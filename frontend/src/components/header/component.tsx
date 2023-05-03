import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../avatar';
import { SizeEnum } from '@/common';
import { HeaderProps } from './types';
import { SideNavigation } from '../side-navigation';
import { NavigationItem } from '../primitives';

const Header: React.FC<HeaderProps> = () => {
  const [nav, setNav] = useState(false);


  return (
    <header className={styles.header}>
      <div onClick={() => setNav(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
      <Avatar size={SizeEnum.SMALL} />

      <SideNavigation opened={nav} setOpened={setNav}>
        <NavigationItem content='All categories' />
        <NavigationItem content='All goods' />
        <NavigationItem content='My profile' />
        <NavigationItem content='Logout' />
      </SideNavigation>
    </header>
  )
}

export { Header };