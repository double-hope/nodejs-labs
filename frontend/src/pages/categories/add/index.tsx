import { Roles } from '@/common';
import { AddCategory, AuthLayout, DefaultLayout } from '@/components';
import React from 'react'

const AddCategoryPage = () => {
  return (
    <DefaultLayout>
      <AuthLayout allowedRoles={[Roles.ADMIN, Roles.EDITOR]}>
        <AddCategory />
      </AuthLayout>
    </DefaultLayout>
  )
}

export default AddCategoryPage;