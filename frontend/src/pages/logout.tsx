/* eslint-disable react-hooks/exhaustive-deps */
import { Loader } from '@/components';
import { logoutAPI } from '@/services';
import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/router";
import { AuthContext } from '@/context';

const Logout = () => {

    const [logoutUser, { isSuccess }] = logoutAPI.useLogoutUserMutation();
    const { setAuth } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      logoutUser({});
    }, []);

    useEffect(() => {
        if(isSuccess) {
            router.push('/sign-in');
            document.cookie = `userId=${null}`;
            document.cookie = `auth=${false}`;

            setAuth({
                user: null,
            });
        }
    }, [isSuccess]);
    
    return (
        <div><Loader /></div>
    )
}

export default Logout