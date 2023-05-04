/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { AuthLayoutProps } from './types';
import { useGetUser } from '@/hooks';
import { AuthContext } from '@/context';
import { Loader } from '@/components/primitives';
import { getCookie } from '@/helpers';
import { useRouter } from 'next/router';

const AuthLayout: React.FC<AuthLayoutProps> = ({allowedRoles, children}) => {

    useGetUser();
    const { user } = useContext(AuthContext);
    const [allowed, setAllowed] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(user)
            setAllowed(allowedRoles.some((role) => user.roles && user.roles.includes(role)));
            
    }, [user]);

    useEffect(() => {
        if (getCookie('userId') === 'null') router.push('sign-in');
    }, []);

    return (
        <>
            {
                user
                ?
                <>
                    {allowed
                    ? <>{children}</>
                    : <p>Not allowed!</p>
                    }
                </> 
                : <Loader />

            }
        </>
    )
}

export { AuthLayout };