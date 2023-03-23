import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    DefinePlugin, type WebpackPluginInstance, ProgressPlugin, HotModuleReplacementPlugin,
} from 'webpack';
import { type BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:10].css',
            chunkFilename: 'css/style.[contenthash:10].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new HotModuleReplacementPlugin(),
    ];
}
