import { AuthContext } from '@/context';
import { getCookie } from '@/helpers';
import { profileAPI } from '@/services';
import { useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from '@/models/IDecodedUser';

const useGetUser = async () => {

    const { user, setAuth } = useContext(AuthContext);
    const [getProfile, { data, isSuccess }] = profileAPI.useUserProfileMutation();
    
    const getUser = async () => {
        await getProfile({id: getCookie('userId') ?? '', auth: getCookie('auth') ?? ''});
    }

    useEffect(() => {
        if(!user && getCookie('auth') === 'true') {
            getUser();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(isSuccess) {

            const decoded: DecodedToken = jwtDecode(data?.accessToken);
            setAuth({
                user: {
                    name: data?.user?.name,
                    email: data?.user?.email,
                    accessToken: data?.accessToken ?? '',
                    roles: decoded?.UserInfo?.roles,
                },
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
    
    return { user, setAuth };
}
export { useGetUser };