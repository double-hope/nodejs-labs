/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { AuthLayoutProps } from './types';
import { useGetUser } from '@/hooks';
import { AuthContext } from '@/context';
import { Loader } from '@/components/primitives';
import { getCookie } from '@/helpers';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout: React.FC<AuthLayoutProps> = ({allowedRoles, children}) => {
    
    const notify = () => toast.error('Not allowed!', {
        position: toast.POSITION.TOP_RIGHT
    });

    useGetUser();
    const { user } = useContext(AuthContext);
    const [allowed, setAllowed] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(user)
            setAllowed(allowedRoles.some((role) => user.roles && user.roles.includes(role)));
            
    }, [user]);

    useEffect(() => {
        if (getCookie('userId') === 'null') router.push('sign-in');
    }, []);

    useEffect(() => {
        if(!allowed) notify();
    }, [allowed]);

    return (
        <>
            {
                user
                ?
                <>
                    {allowed
                    ? <>{children}</>
                    : <ToastContainer />
                    }
                </> 
                : <Loader />

            }
        </>
    )
}

export { AuthLayout };