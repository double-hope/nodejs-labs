import { AuthLayout, DefaultLayout, EditCategory } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';
import { Roles } from '@/common';

const EditCategoryPage = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <DefaultLayout>
            <AuthLayout allowedRoles={[Roles.ADMIN, Roles.EDITOR]}>
                {typeof id !== 'undefined' && <EditCategory id={Array.isArray(id) ? id[0].toString() : id} />}
            </AuthLayout>
        </DefaultLayout>
    )
}

export default EditCategoryPage;