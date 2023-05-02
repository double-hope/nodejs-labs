import { Category } from '@/models';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps = async (context) => {
  
  const res = await fetch('http://localhost:3001/categories');
  const categories: Category[] = await res.json();

  return {
    props: {...categories}
  }
}


const CategoriesPage: NextPage = ({categories}: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <div>
      {categories.map((category: Category, key: number) => 
        <div key={key}>
          <h1>{category.name}</h1>

        </div>
        
      )}
    </div>
  )
}

export default CategoriesPage;