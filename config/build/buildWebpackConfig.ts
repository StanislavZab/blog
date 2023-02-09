import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        entry: paths.entry,
        module: buildLoaders(options),
        resolve: buildResolvers(options),
        output: {
            path: paths.build,
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        plugins: buildPlugins(options),
    };
}