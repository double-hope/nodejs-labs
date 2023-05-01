import { categoryAPI } from '@/services';
import React from 'react'

const CategoriesPage = () => {
  const { data: categories, error, isLoading } = categoryAPI.useFetchAllCategoriesQuery(3);
  console.log(categories);
  
  return (
    <div>CategoriesPage</div>
  )
}

export default CategoriesPage;