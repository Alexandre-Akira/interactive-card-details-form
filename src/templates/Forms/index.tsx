import { Outlet } from 'react-router-dom';
import { CreditCardForm } from '../../components/molecules/Form/CreditCardForm';

import * as S from './styles'

export function FormsTemplate () {
  return (
    <S.Container>
      {/* <Outlet/> */}
      <CreditCardForm/>
    </S.Container>
  );
}
