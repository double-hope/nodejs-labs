import React, { MouseEvent, useContext, useEffect } from 'react';
import { CategoriesItemProps } from './types';
import { GoodItem } from '../good-item';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBucket } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '@/context';
import { categoryAPI } from '@/services';
import { Roles } from '@/common';

const CategoriesItem: React.FC<CategoriesItemProps> = ({name, description, goods, id}) => {

  const { user } = useContext(AuthContext);
  const [deleteCategory, { isSuccess }] = categoryAPI.useDeleteCategoryMutation();

  const handleDelete = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(user?.roles.includes(Roles.ADMIN)) await deleteCategory({id, accessToken: user?.accessToken ?? '', roles: user?.roles ?? []});
  }

  return (
    <div className={styles.categoryWrapper}>
        
      <div>
        <div className={styles.controlCategory}>
          <h1><Link href={`/categories/edit/${id}`}>{name}</Link></h1>
          <div onClick={handleDelete}>
            <FontAwesomeIcon icon={faBucket} />
          </div>
          
        </div>
        
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