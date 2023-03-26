import { type BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                // Plugins: [
                //     [
                //         'i18next-extract',
                //         {
                //             locales: ['ru', 'en'],
                //             keyAsDefaultValue: true,
                //         },
                //     ],
                // ],
            },
        },
    };
}
