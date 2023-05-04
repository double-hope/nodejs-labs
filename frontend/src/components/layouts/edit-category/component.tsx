import React, { useContext, useState, FormEvent, useEffect } from 'react';
import { EditCategoryProps } from './types';
import { AuthContext } from '@/context';
import { categoryAPI } from '@/services';
import { Button, Input, Loader } from '@/components/primitives';
import { UpdateCategory } from '@/models';
import { useRouter } from "next/router";
import styles from './styles.module.scss';

const EditCategory: React.FC<EditCategoryProps> = ({id}) => {

    const { user } = useContext(AuthContext);
    const router = useRouter();

    const {data} = categoryAPI.useFetchOneCategoryQuery({id, accessToken: user?.accessToken ?? ''}); 
    const [updateCategory, {isSuccess}] = categoryAPI.useUpdateCategoryMutation(); 

    const [name, setName] = useState(data?.name || '');
    const [description, setDescription] = useState(data?.description || '');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const category: UpdateCategory = {
            name,
            description,
        }

        updateCategory({id, category, accessToken: user?.accessToken ?? '', roles: user?.roles ?? []});

    }

    useEffect(() => {                
      if(isSuccess) router.push('/categories');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
    
    return (
        <div>
            {
                data
                ?   <form onSubmit={handleSubmit} className={styles.form}>
                        <Input label='Name of category' type='text' value={name} setValue={setName} />
                        <Input label='Description of category' type='text' value={description} setValue={setDescription}  />
                        <Button text='Submit' />
                    </form>
                : <Loader />
            }


        </div>
    )
}

export { EditCategory };