import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
  },
  'body, input, textarea, select, legend, button': {
    fontFamily: '$SpaceGrotesk',
  },
})
