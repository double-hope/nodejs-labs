import React, { useState, FormEvent, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Button, Input } from '@/components/primitives';
import { useAuthUserMutation } from '@/services';
import { AuthUser } from '@/models';
import { useRouter } from "next/router";
import { AuthContext } from '@/context';
import Link from 'next/link';
import { useGetUser } from '@/hooks';

const SignInLayout = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    useGetUser();

    const { user, setAuth } = useContext(AuthContext);

    const [authUser, { isSuccess, data }] = useAuthUserMutation();
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: AuthUser = {
            email,
            password,
        }

        if(!email || !password) return;

        await authUser({...user});
        
    }

    useEffect(() => {
         
        if(isSuccess) {
            setAuth({
                user: {
                    name: data.user.name,
                    email: data.user.email,
                    accessToken: data.accessToken,
                },
            });

            document.cookie = `userId=${data.user.id}`;
            document.cookie = `auth=${true}`;
            
            router.push('/categories');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
    
    useEffect(() => {
        if(user?.accessToken) {            
            router.push('/categories');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div className={styles.layout}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type='email' value={email} setValue={setEmail} label={'Email'} placeholder='Your email' />
                <Input type='password' value={password} setValue={setPassword} label={'Password'} placeholder='Your password' />
                <Button text='Sign in' />
            </form>
            <p>Do not have an account?</p> 
            <Link href='/sign-up'>Sign up</Link>
        </div>
    )
}

export { SignInLayout };