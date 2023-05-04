import { DefaultLayout, GoodsItem, Loader } from '@/components';
import { Good } from '@/models';
import { NextPage } from 'next';
import React, { useContext } from 'react';
import { AuthContext } from '@/context';
import { goodAPI } from '@/services';

const GoodsPage: NextPage = () => {

    const { user } = useContext(AuthContext);

    const { data } = goodAPI.useFetchAllGoodsQuery(user?.accessToken ?? '');

    return (
        <DefaultLayout>
            {
                data
                ? <GoodsItem goods={data.goods} />
                : <Loader />
            }
            
        </DefaultLayout>
    )
}

export default GoodsPage;