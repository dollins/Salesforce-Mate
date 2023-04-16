let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/scss/popup.scss', 'public/css')
    .js('src/js/background.js', 'public/js')
    .js('src/js/popup.js', 'public/js').vue()
    .options({
        processCssUrls: false
    });