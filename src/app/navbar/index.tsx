import type { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/react';

export const Navbar = (props: PropsWithChildren) => {
	return (
		<Flex as="nav" height="100px" width="100px" bg={['primary.500']}>
			{props.children}
		</Flex>
	);
};
