declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module '*.png' {
	const value: any;
	export = value;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
