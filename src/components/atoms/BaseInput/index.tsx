import { InputHTMLAttributes } from 'react';
import * as S from './styles'

export function BaseInput (props: Omit<InputHTMLAttributes<HTMLInputElement>, 'css'>) {
  return (
    <S.Input {...props}/>
  );
}
