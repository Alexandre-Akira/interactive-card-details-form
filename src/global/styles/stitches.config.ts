import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      light_grey: '#DFDEE0',
      deep_violet: '#21092F',
      gradient: 'linear-gradient(#6348FE, #610595)'
    },

    fonts: {
      SpaceGrotesk: 'Space Grotesk, sans-serif',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});