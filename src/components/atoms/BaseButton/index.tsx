import { ButtonHTMLAttributes } from 'react';
import * as S from './styles'

export interface IBaseButtonProps {
  children: string
}

export function BaseButton ({children, ...props}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'>) {
  return (
    <S.Button {...props}>
    {children}
    </S.Button>
  );
}
