import { DefaultLayout, GoodsItem } from '@/components';
import { Good } from '@/models';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch('http://localhost:3002/goods');
    const goods: Good[] = await res.json();

    return {
        props: {...goods}
    }
}

const GoodsPage: NextPage = ({goods}: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <DefaultLayout>
            <GoodsItem goods={goods} />
        </DefaultLayout>
    )
}

export default GoodsPage;