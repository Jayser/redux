const { resolve, normalize } = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'development';
const PRODUCTION = env === 'production';
const root = resolve(__dirname, '../');

const publicPath = PRODUCTION ? './' : `http://${ host }:${ port }/`;

function addHash(path, opt) {
    const hash = opt && opt.chunkHash ? 'chunkhash' : 'hash';
    return path + (PRODUCTION ? `?[${hash}]` : '');
}

module.exports = {
    paths: {
        context: normalize(`${root}/src`),
        entry: {
            app: './index.js',
            vendor: [
                'bootstrap-sass/assets/stylesheets/_bootstrap.scss',
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
                    importLoaders: 1,
                    minimize: PRODUCTION,
                    sourceMap: !PRODUCTION,
                    localIdentName: PRODUCTION ? '[path][name]__[local]-[hash:6]' : '[path][name]__[local]',
                    modules: true
                }
            },
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader?sourceMap'
        ],
        vendorStylesheets: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader?sourceMap'
        ]
    },
    plugins: {
        htmlWebpackPlugin: {
            favicon: 'favicon.ico',
            template: './index.html',
            minify: PRODUCTION ? {
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
        definePlugin: {
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        },
        loaderOptionsPlugin: {
            test: /\.scss$/,
            debug: true,
            minimize: PRODUCTION,
            options: {
                postcss: [
                    require('autoprefixer')({ browsers: ['last 2 versions'] })
                ],
                context: normalize(`${root}/src`),
                output: { path: publicPath }
            }
        }
    },
    devServer: {
        historyApiFallback: true,
        compress: PRODUCTION,
        inline: !PRODUCTION,
        hot: !PRODUCTION,
        publicPath,
        stats: {
            chunks: false,
            errorDetails: true,
            colors: true
        }
    },
    devtool: PRODUCTION ? 'eval' : 'source-map',
    env: {
        HOST: host,
        PORT: port,
        NODE_ENV: env
    }
};