import React, { useContext } from 'react'
import { useGetUser } from '@/hooks';
import { AuthContext } from '@/context';
import { Loader } from '@/components/primitives';
import avatar from '@/mocks/images/avatar.jpg';
import Image from "next/image";
import { Avatar } from '@/components/avatar';
import { SizeEnum, SizeToNumber } from '@/common';

const Profile: React.FC = () => {

    useGetUser();
    const { user } = useContext(AuthContext);


    return (
        <div>
            {
                user
                ? <div>
                    <Avatar size={SizeEnum.X_LARGE}/>
                    {user.name}
                </div>
                : <Loader />
            }
        </div>
    )
}

export { Profile };