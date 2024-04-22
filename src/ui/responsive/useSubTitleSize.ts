import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

export const useSubTitleSize = (): 3 | 5 => {
	const breakpoint = useBreakpoint();
	return breakpoint.lg === true ? 3 : 5;
};
