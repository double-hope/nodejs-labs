import { DefaultLayout, EditCategory } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';

const EditCategoryPage = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <DefaultLayout>
            {typeof id !== 'undefined' && <EditCategory id={Array.isArray(id) ? id[0].toString() : id} />}
        </DefaultLayout>
    )
}

export default EditCategoryPage;