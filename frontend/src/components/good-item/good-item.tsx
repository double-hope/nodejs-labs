import React from 'react';
import { GoodItemProps } from './types';
import styles from './good-item.module.scss';

const GoodItem: React.FC<GoodItemProps> = ({name, description, price}) => {
  return (
    <div className={styles.goodWrapper}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export { GoodItem };