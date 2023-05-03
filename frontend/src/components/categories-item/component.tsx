import React from 'react';
import { CategoriesItemProps } from './types';
import { GoodItem } from '../good-item';
import styles from './styles.module.scss';

const CategoriesItem: React.FC<CategoriesItemProps> = ({name, description, goods}) => {
  return (
    <div className={styles.categoryWrapper}>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
        
      <div className={styles.goodsWrapper}>
        {
          goods.map((good, key) => 
            <GoodItem key={key} name={good.name} description={good.description} price={good.price} />
          )
        }
      </div>
        
    </div>
  )
}

export { CategoriesItem };