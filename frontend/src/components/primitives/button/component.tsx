import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from './types';

const Button = ({text}: ButtonProps) => {
  return (
    <button className={styles.button}>
        {text}
    </button>
  )
}

export { Button };