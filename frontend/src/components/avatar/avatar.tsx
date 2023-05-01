import React from 'react';
import { AvatarType } from './types';
import styles from './avatar.module.scss';
import Image from 'next/image';
import picture from '@/mocks/images/avatar.jpg';
import { SizeToNumber } from '@/common';

const Avatar: React.FC<AvatarType> = ({size}) => {

    const auth = {
        picture,
    }

    return (
        <div className={styles.avatarWrapper} image-size={size}>
            <Image src={auth.picture || 'No'} width={SizeToNumber[size]} height={SizeToNumber[size]} alt='' />
        </div>
    )
}

export { Avatar };