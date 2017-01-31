const { resolve, normalize } = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const root = resolve(__dirname, '../');

const publicPath = isProduction ? './' : `http://${ host }:${ port }/`;

function addHash(path, opt) {
    const hash = opt && opt.chunkHash ? 'chunkhash' : 'hash';
    return path + (isProduction ? `?[${hash}]` : '');
}

module.exports = {
    paths: {
        context: normalize(`${root}/src`),
        entry: {
            app: './app.js',
            vendor: [
                'normalize.css',
                'babel-polyfill',
                'es6-promise',
                'react-dom',
                'react-redux',
                'react-router',
                'react',
                'redux-thunk',
                'redux'
            ]
        },
        output: {
            publicPath,
            filename: addHash('js/[name].bundle.js'),
            chunkFilename: addHash('js/[name].chunk.js', { chunkHash: true }),
        },
        rules: {
            images: addHash('images/[name].[ext]'),
            fonts: addHash('fonts/[name].[ext]')
        },
    },
    rules: {
        stylesheets: [
            'style-loader',
            {
                loader: 'css-loader',
                query: {
                    minimize: isProduction,
                    sourceMap: !isProduction,
                    localIdentName: isProduction ? '[path][name]__[local]-[hash:6]' : '[path][name]__[local]',
                    modules: true
                }
            },
            'postcss-loader',
            'sass-loader?sourceMap',
        ]
    },
    plugins: {
        htmlWebpackPlugin: {
            template: './index.html',
            minify: isProduction ? {
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                } : false
        },
        uglifyJsPlugin: {
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        },
        loaderOptionsPlugin: {
            minimize: isProduction,
            options: {
                postcss: normalize(`${root}/config/config.postcss.js`),
                eslint: { configFile: normalize(`${root}/config/.eslintrc`) },
                babel: { extends: normalize(`${root}/config/.babelrc`) },
                context: normalize(`${root}/src`),
            }
        }
    },
    devServer: {
        historyApiFallback: true,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        publicPath,
        stats: {
            chunks: false,
            errorDetails: true,
            colors: true
        }
    },
    devtool: isProduction ? 'eval' : 'source-map',
    env: {
        HOST: host,
        PORT: port,
        NODE_ENV: env
    }
};