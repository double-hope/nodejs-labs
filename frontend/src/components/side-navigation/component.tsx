import React, { useCallback } from 'react';
import { SideNavigationProps } from './types';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';
import {motion} from 'framer-motion';
import { useOutsideClick } from '@/hooks/outside-click';

const SideNavigation: React.FC<SideNavigationProps> = ({opened, setOpened, children}) => {

    const handleClickOutside = useCallback(() => {
        setOpened(false);
      }, [setOpened]);

    const ref = useOutsideClick(handleClickOutside);

    const renderPortalBody = () => (
        <div className={styles.navigationWrapper} >
            <motion.div 
                ref={ref} 
                className={styles.navigationContent} 
                initial={{ x: -300}}
                animate={{ x: 0 }} 
                exit={{ width: 0}}
                transition={{duration: .3}}>
                    
                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />

                    {children}
                    
            </motion.div>
        </div>
    );

    const renderPortal = () =>
        createPortal(renderPortalBody(), document.getElementById('side-navigation') as HTMLDivElement);

    return (
        <React.Fragment>
            {opened && renderPortal()}
        </React.Fragment>
    )
}

export { SideNavigation };