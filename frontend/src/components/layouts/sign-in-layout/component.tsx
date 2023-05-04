import React, { useState, FormEvent, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Button, Input } from '@/components/primitives';
import { useAuthUserMutation } from '@/services';
import { AuthUser } from '@/models';
import { useRouter } from "next/router";
import { AuthContext } from '@/context';

const SignInLayout = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const { setAuth } = useContext(AuthContext);

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
                },
                accessToken: data.accessToken,
            });
            
            router.push('/categories');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
    

    return (
        <div className={styles.layout}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type='email' value={email} setValue={setEmail} label={'Email'} placeholder='Your email' />
                <Input type='password' value={password} setValue={setPassword} label={'Password'} placeholder='Your password' />
                <Button text='Sign in' />
            </form>
        </div>
    )
}

export { SignInLayout };