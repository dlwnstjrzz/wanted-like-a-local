import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    gray: {
      100: '#fafafa',
      200: '#f7f7f7',
      500: '#D3D3D3',
      700: '#808080',
      800: '#5A5A5A',
    },
    black: {
      100: '#000000',
    },
    maroon: '#800000',
    fuchsia: '#FF00FF',
    blue: '#0000FF',
    aqua: '#00FFFF',
    lime: '#00FF00',
  },
});

export default theme;
