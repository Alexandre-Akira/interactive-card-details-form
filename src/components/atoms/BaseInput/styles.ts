import { styled } from "../../../global/styles/stitches.config";

export const Input = styled('input', {
  width: '100%',
  outline: 'none',
  padding: '1.6rem',
  borderColor: '$light_grey',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderRadius: '0.8rem',
  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '2.297rem',
  '&::placeholder': {
    color: '$deep_violet',
    opacity: 0.25,
    fontSize: '1.8rem',
    fontWeight: 500,
    lineHeight: '22.97rem'
  },
  '&:focus': {
    border: 'double 0.1rem transparent',
    backgroundImage: 'linear-gradient(white, white), $gradient',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box'
  }
})


