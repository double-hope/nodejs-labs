import React from 'react';
import Image from 'next/image';
import { GoodItemProps } from './types';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import picture from '@/mocks/images/pic2.jpg';

const GoodItem: React.FC<GoodItemProps> = ({name, description, price}) => {
  return (
    <motion.div className={styles.goodWrapper} whileHover={{scale: 1.05}}>
        <h1>{name}</h1>
        <Image src={picture} alt='' />
        <p>{description}</p>
        <p>{price}</p>
    </motion.div>
  )
}

export { GoodItem };