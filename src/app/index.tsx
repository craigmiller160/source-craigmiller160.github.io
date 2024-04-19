import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './navbar';
import { theme } from './theme';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Navbar />
	</ChakraProvider>
);
