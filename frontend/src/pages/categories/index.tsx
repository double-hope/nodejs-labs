import { CategoriesItem, DefaultLayout, IconifyLink, Loader } from '@/components';
import { AuthContext } from '@/context';
import { Category } from '@/models';
import { categoryAPI } from '@/services';
import { NextPage } from 'next';
import React, { useContext } from 'react';

const CategoriesPage: NextPage = () => {

  const { user } = useContext(AuthContext);

  const { data } = categoryAPI.useFetchAllCategoriesQuery(user?.accessToken ?? '');
  
  return (
    <DefaultLayout>
      <IconifyLink href={'/categories/add'}/>
      <>
        {
        data
        ? data?.categories.map((category: Category, key: number) => 
          <CategoriesItem name={category.name} description={category.description} goods={category?.goods} key={key} id={category.id} />
        )
          
        : <Loader />
          
      }
      </>
    </DefaultLayout>
  )
}

export default CategoriesPage;