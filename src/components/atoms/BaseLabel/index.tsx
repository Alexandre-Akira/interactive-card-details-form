import { InputHTMLAttributes } from 'react';
import * as S from './styles'

export interface IBaseLabelProps extends Omit<InputHTMLAttributes<HTMLLabelElement>, 'css'>{
children: string,
}

export function BaseLabel ({children, ...props}: IBaseLabelProps) {
  return (
    <S.Label {...props}>{children}</S.Label>
  );
}
