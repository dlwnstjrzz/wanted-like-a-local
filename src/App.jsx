import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { Main, Reservation } from './pages';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
