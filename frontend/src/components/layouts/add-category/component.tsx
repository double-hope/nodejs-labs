import React, { useContext, useState, FormEvent, useEffect } from 'react';
import { AuthContext } from '@/context';
import { categoryAPI } from '@/services';
import { Button, Input } from '@/components/primitives';
import { CreateCategory } from '@/models';
import { useRouter } from "next/router";
import { useGetUser } from '@/hooks';
import styles from './styles.module.scss';

const AddCategory: React.FC = () => {
    useGetUser();
    const { user } = useContext(AuthContext);
    const router = useRouter();
    
    const [createCategory, {isSuccess}] = categoryAPI.useCreateCategoryMutation(); 

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const category: CreateCategory = {
            name,
            description,
        }

        await createCategory({category, accessToken: user?.accessToken ?? '', roles: user?.roles ?? []});

    }

    useEffect(() => {
             
      if(isSuccess) router.push('/categories');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
    
    return (
        <div>
            {
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input label='Name' type='text' value={name} setValue={setName} placeholder='Category name' />
                    <Input label='Description' type='text' value={description} setValue={setDescription} placeholder='Category description'  />
                    <Button text='Submit' />
                </form>
            }


        </div>
    )
}

export { AddCategory };