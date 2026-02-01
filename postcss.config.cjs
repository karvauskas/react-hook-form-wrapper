module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        ...(process.env.MINIFY ? [require('cssnano')()] : []),
    ],
}
