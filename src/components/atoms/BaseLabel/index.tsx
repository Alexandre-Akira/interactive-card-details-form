import { LabelHTMLAttributes } from 'react';
import * as S from './styles'

export interface IBaseLabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'css'>{
children: string,
}

export function BaseLabel ({children, ...props}: IBaseLabelProps) {
  return (
    <S.Label {...props}>{children}</S.Label>
  );
}
