import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule {
    const { isDev } = options;
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodebabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return {
        rules: [
            fileLoader,
            svgLoader,
            codeBabelLoader,
            tsxCodebabelLoader,
            // typescriptLoader,
            cssLoader,
        ],
    };
}
