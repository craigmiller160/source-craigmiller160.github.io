/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ComponentType, lazy } from 'react';

export const namedLazy = (
	importer: () => Promise<Record<string, any>>,
	name: string
) =>
	lazy(() =>
		importer().then((res) => ({
			default: res[name] as ComponentType<any>
		}))
	);
