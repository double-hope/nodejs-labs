import { CategoryItem, DefaultLayout } from '@/components';
import { Category } from '@/models';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps = async (context) => {
  
  const res = await fetch('http://localhost:3002/categories');
  const categories: Category[] = await res.json();

  return {
    props: {...categories}
  }
}


const CategoriesPage: NextPage = ({categories}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(categories);
  
  return (
    <DefaultLayout>
      <>
        {categories.map((category: Category, key: number) => 
          <CategoryItem name={category.name} description={category.description} goods={category.goods} key={key} />
        )}
      </>
    </DefaultLayout>
  )
}

export default CategoriesPage;