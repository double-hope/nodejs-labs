import React from 'react';
import styles from './styles.module.scss';
import { CustomLink } from '../primitives';
import Image from 'next/image';
import pic from '@/mocks/images/pic.jpg';

const Main = () => {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
            <div>
                <h1>Labs 3-4</h1>
                <p>Made with love</p>
            </div>
            <CustomLink href='/categories' text='go ahead' />
        </div>
        <div className={styles.picture}>
            <div>
              <Image src={pic} alt='' />  
            </div>
        </div>
       
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
    </main>
  )
}

export { Main };