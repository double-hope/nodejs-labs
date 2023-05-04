import React, { useState, FormEvent, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Button, Input } from '@/components/primitives';
import { useRegisterUserMutation } from '@/services';
import { RegisterUser } from '@/models/IRegisterUser';
import { useRouter } from "next/router";
import { AuthContext } from '@/context';

const SignUpLayout = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const { setAuth } = useContext(AuthContext);

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
        if(isSuccess) {
            setAuth({
                user: {
                    name: data.user.name,
                    email: data.user.email,
                    accessToken: '',
                },
            });

            router.push('/categories');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    return (
        <div className={styles.layout}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type='text' value={name} setValue={setName} label={'Name'} placeholder='Your name' />
                <Input type='email' value={email} setValue={setEmail} label={'Email'} placeholder='Your email' />
                <Input type='password' value={password} setValue={setPassword} label={'Password'} placeholder='Your password' />
                <Button text='Sign up' />
            </form>
        </div>
    )
}

export { SignUpLayout };