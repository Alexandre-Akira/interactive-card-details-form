import { styled } from "../../../global/styles/stitches.config";
import { BaseLabel } from '../../atoms/BaseLabel';
import { BaseInput } from '../../atoms/BaseInput';
import { BaseLegend } from "../../atoms/BaseLegend";

export const Form = styled('form', {
display:'flex',
flexDirection: 'column',
width: '32.7rem',
})

export const Label = styled(BaseLabel, {
  marginBottom: '0.9rem',
})

export const Input = styled(BaseInput, {
  marginBottom: '2.0rem',
})

export const Container = styled('div', {
  display: 'flex',
})

export const FieldSet = styled('fieldset', {
all: 'unset'
})

export const Legend = styled(BaseLegend, {
marginBottom: '0.9rem'
})

export const InputContainer = styled('div', {
  display: 'flex',
  '& label': {
    position: "absolute",
    visibility: 'hidden',
  },
  '& div': {
    marginRight: '0.8rem',
  }
})

export const Wrapper = styled('div', {
})
