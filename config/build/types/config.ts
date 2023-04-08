export type BuildMode = 'development' | 'production';

export type BuildPaths = {
	entry: string;
	build: string;
	html: string;
	src: string;
	locales: string;
	buildLocales: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
	project: 'storybook' | 'frontend' | 'jest';
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	apiUrl?: string;
};
