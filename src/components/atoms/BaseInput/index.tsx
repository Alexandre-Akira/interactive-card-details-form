import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import * as S from './styles'

export const BaseInput = forwardRef<React.ElementRef<typeof S.Input>, InputHTMLAttributes<HTMLInputElement>>((props, ref) =>  {
  return (
    <>
    <S.Input ref={ref} {...props}/>
    </>
  );
})
