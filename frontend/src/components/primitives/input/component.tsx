import React from 'react';
import { InputProps } from './types';
import styles from './styles.module.scss';

const Input: React.FC<InputProps> = ({value, setValue, label, type, inputRef, placeholder}) => {
  return (
    <div className={styles.inputWrapper}>
        <label>{label}</label>
        <input 
            type={type}
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
            placeholder={placeholder}
            />

    </div>
  )
}

Input.defaultProps = {
    type: 'text',
}

export { Input };