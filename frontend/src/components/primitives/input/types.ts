import { Dispatch, SetStateAction, LegacyRef } from 'react';

export type InputProps = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    label: string | null;
    type: string;
    inputRef?: LegacyRef<HTMLInputElement> | undefined;
    placeholder?: string;
}