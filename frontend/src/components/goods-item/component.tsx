import React from 'react';
import { GoodItem } from '../good-item';
import { Good } from "@/models";
import { GoodsItemProps } from './types';
import styles from './styles.module.scss';

const GoodsItem: React.FC<GoodsItemProps> = ({goods}) => {
  return (
    <div className={styles.goodsWrapper}>
        {
            goods.map((good: Good, key: number) =>
                <GoodItem name={good.name} description={good.description} price={good.price} key={key} />
            )
        }
    </div>
  )
}

export { GoodsItem };