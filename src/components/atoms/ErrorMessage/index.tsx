
import * as S from './styles'

export interface IErrorMessageProps {
  children: string
}

export function ErrorMessage ({children}: IErrorMessageProps) {
  return (
    <S.ErrorMessage role='alert'>{children}</S.ErrorMessage>
  );
}
