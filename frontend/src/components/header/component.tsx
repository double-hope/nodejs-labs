import React, { useState, useContext } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../avatar';
import { SizeEnum } from '@/common';
import { HeaderProps } from './types';
import { SideNavigation } from '../side-navigation';
import { NavigationItem } from '../primitives';
import { AuthContext } from '@/context';

const Header: React.FC<HeaderProps> = () => {
  const [nav, setNav] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div onClick={() => setNav(true)} className={styles.menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
      <Avatar size={SizeEnum.SMALL} />

      <SideNavigation opened={nav} setOpened={setNav}>
        <NavigationItem content='All categories' href='/categories' />
        <NavigationItem content='All goods' href='/goods' />
        <NavigationItem content='My profile' href={`/profile/${user?.name}`} />
        <NavigationItem content='Logout' href='/categories' />
      </SideNavigation>
    </header>
  )
}

export { Header };