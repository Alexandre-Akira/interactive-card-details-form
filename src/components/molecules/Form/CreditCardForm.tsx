import { HTMLAttributes } from 'react';
import * as S from './styles'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../atoms/BaseButton/styles';
import { ErrorMessage } from '../../atoms/ErrorMessage';

export interface ICreditCardFormProps extends HTMLAttributes<HTMLFormElement>{}

const NUMERIC_REGEXP = /^\d+$/g;

const validationSchema = yup.object({
holdername: yup.string().required('Cant be blank'),
number: yup.string().required('Cant be blank').matches(NUMERIC_REGEXP, 'Wrong format, numbers only'),
month: yup.string().required('Cant be blank').matches(NUMERIC_REGEXP, 'Wrong format, numbers only'),
year: yup.string().required('Cant be blank').matches(NUMERIC_REGEXP, 'Wrong format, numbers only'),
cvc: yup.string().required('Cant be blank').matches(NUMERIC_REGEXP, 'Wrong format, numbers only'),
})

export function CreditCardForm ({children, ...props}: ICreditCardFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data : any) => console.log(data);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} {...props}>

      <S.Label htmlFor='cardHolderName'>CARDHOLDER NAME</S.Label>
      <S.Input id='cardHolderName' placeholder='e.g Alexandre Akira' data-testid='card-holder-name' {...register("holdername", {required: true})}/>
      {errors.holdername?.message && <ErrorMessage>{errors.holdername.message?.toString()}</ErrorMessage>}

      <S.Label htmlFor='cardNumber'>CARD NUMBER</S.Label>
      <S.Input id='cardNumber' placeholder='e.g. 1234 5678 9123 0000' data-testid='card-number' {...register("number", {required: true})}/>
      {errors.number?.message && <ErrorMessage>{errors.number.message.toString()}</ErrorMessage>}

      <S.Container>
        <S.FieldSet>
          <S.Legend>Exp. Date (MM/YY)</S.Legend>
            <S.InputContainer>
              <S.Wrapper>
                <S.Label htmlFor='cardValidMonth'>MM</S.Label>
                <S.Input id='cardValidMonth' placeholder='MM' data-testid='card-valid-month' {...register("month", {required: true})}/>
                {errors.month?.message && <ErrorMessage>{errors.month.message.toString()}</ErrorMessage>}
              </S.Wrapper>
              <S.Wrapper>
                <S.Label htmlFor='cardValidYear'>YY</S.Label>
                <S.Input id='cardValidYear' placeholder='YY' data-testid='card-valid-year' {...register("year", {required: true})}/>
                {errors.year?.message && <ErrorMessage>{errors.year?.message.toString()}</ErrorMessage>}
              </S.Wrapper>
            </S.InputContainer>
        </S.FieldSet>
        <S.Wrapper>
          <S.Label htmlFor='cardCvc'>CVC</S.Label>
          <S.Input id='cardCvc' placeholder='e.g. 123' data-testid='card-cvc' {...register("cvc", {required: true})}/>
          {errors.cvc?.message && <ErrorMessage>{errors.cvc.message.toString()}</ErrorMessage>}
        </S.Wrapper>
      </S.Container>

      <Button type='submit' data-testid='card-form-button-submit'>Confirm</Button>
    </S.Form>
  );
}
