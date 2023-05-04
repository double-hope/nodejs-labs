import React, { useState, FormEvent, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Button, Input } from '@/components/primitives';
import { useRegisterUserMutation } from '@/services';
import { RegisterUser } from '@/models/IRegisterUser';
import { useRouter } from "next/router";
import { AuthContext } from '@/context';
import Link from 'next/link';
import { useGetUser } from '@/hooks';

const SignUpLayout = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useGetUser();

    const { user, setAuth } = useContext(AuthContext);

    const [registerUser, { isSuccess, data }] = useRegisterUserMutation();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: RegisterUser = {
            name,
            email,
            password,
        }

        if(!name || !email || !password) return;
        await registerUser({...user});       
    }

    useEffect(() => { 
        if(isSuccess) 
            router.push('/sign-in');
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    useEffect(() => {
        if(user?.accessToken)        
            router.push('/categories');
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div className={styles.layout}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type='text' value={name} setValue={setName} label={'Name'} placeholder='Your name' />
                <Input type='email' value={email} setValue={setEmail} label={'Email'} placeholder='Your email' />
                <Input type='password' value={password} setValue={setPassword} label={'Password'} placeholder='Your password' />
                <Button text='Sign up' />
            </form>
            <p>Already have an account?</p> 
            <Link href='/sign-in'>Sign in</Link>
        </div>
    )
}

export { SignUpLayout };