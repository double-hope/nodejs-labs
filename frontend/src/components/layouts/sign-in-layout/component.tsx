import React, { useState, FormEvent } from 'react';
import styles from './styles.module.scss';
import { Button, Input } from '@/components/primitives';
import { useAuthUserMutation } from '@/services';
import { AuthUser } from '@/models';

const SignInLayout = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [authUser, res] = useAuthUserMutation();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: AuthUser = {
            email,
            password,
        }

        if(!email || !password) return;

        await authUser({...user})        
    }

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