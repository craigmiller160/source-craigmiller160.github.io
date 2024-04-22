import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

export const useSubTitleSize = () => {
	const breakpoint = useBreakpoint();
	return breakpoint.lg === true ? 3 : 5;
};
