/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ComponentType, lazy } from 'react';

export const namedLazy = <T extends ComponentType<any>>(
	importer: () => Promise<Record<string, any>>,
	name: string
) =>
	lazy<T>(() =>
		importer().then((res) => ({
			default: res[name] as T
		}))
	);
