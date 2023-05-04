import React from 'react'
import { MutatingDots } from 'react-loader-spinner';
import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
        <MutatingDots 
            height="100"
            width="100"
            color="#123683"
            secondaryColor= '#123683'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
    </div>
  )
}

export { Loader };