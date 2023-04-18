let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/components/popup/popup.scss', 'public/css')
    .js('src/components/popup/popup.js', 'public/js').vue()
    .js('src/scripts/background.js', 'public/js')
    .copy('src/components/popup/popup.html', 'public')
    .options({
        processCssUrls: false
    });