import path from 'path';

export default {
    clearMocks: true,

    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleDirectories: [
        'node_modules',
    ],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../../',

    modulePaths: [
        '<rootDir>src',
    ],

    setupFilesAfterEnv: [
        '<rootDir>/config/jest/setupTests.ts',
    ],

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    preset: 'ts-jest',

};
