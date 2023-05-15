import { Roles } from '@/common';
import { AuthLayout, CategoriesItem, DefaultLayout, IconifyLink, Loader } from '@/components';
import { AuthContext } from '@/context';
import { useAppSelector } from '@/hooks';
import { Category } from '@/models';
import { categoryAPI } from '@/services';
import { NextPage } from 'next';
import React, { useContext } from 'react';

const CategoriesPage: NextPage = () => {

  const { user } = useContext(AuthContext);
  
  const { data } = categoryAPI.useFetchAllCategoriesQuery(user?.accessToken ?? '');
  
  return (
    <DefaultLayout>
      <AuthLayout allowedRoles={[Roles.ADMIN, Roles.EDITOR, Roles.USER]}>
        <IconifyLink href={'/categories/add'}/>
          <>
            {
            data
            ? <>
            {
              data.length

              ? data.map((category: Category, key: number) => 
                <CategoriesItem name={category.name} description={category.description} goods={category?.goods} key={key} id={category.id} />
              )
              : <p>No categories:(</p>
            }
            </>              
            : <Loader />
              
          }
          </>
      </AuthLayout>
      
    </DefaultLayout>
  )
}

export default CategoriesPage;