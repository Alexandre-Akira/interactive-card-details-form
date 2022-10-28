import { HTMLAttributes } from 'react';
import * as S from './styles'

export interface ICreditCardFormProps extends HTMLAttributes<HTMLFormElement>{}

export function CreditCardForm ({children, ...props}: ICreditCardFormProps) {
  return (
    <S.Form {...props}>

      <S.Label>CARDHOLDER NAME</S.Label>
      <S.Input placeholder='e.g Alexandre Akira'/>

      <S.Label>CARD NUMBER</S.Label>
      <S.Input placeholder='e.g. 1234 5678 9123 0000'/>

      <S.Container>
        <S.FieldSet>
          <S.Legend>Exp. Date (MM/YY)</S.Legend>
            <S.InputContainer>
              <S.Wrapper>
                <S.Label>MM</S.Label>
                <S.Input placeholder='MM'/>
              </S.Wrapper>
              <S.Wrapper>
                <S.Label>YY</S.Label>
                <S.Input placeholder='YY'/>
              </S.Wrapper>
            </S.InputContainer>
        </S.FieldSet>
        <S.Wrapper>
          <S.Label>CVC</S.Label>
          <S.Input placeholder='e.g. 123'/>
        </S.Wrapper>
      </S.Container>
    </S.Form>
  );
}
