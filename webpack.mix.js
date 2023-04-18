let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/components/popup/popup.scss', 'public/css')
    .js('src/components/popup/popup.js', 'public/js').vue()
    .copy('src/components/popup/popup.html', 'public')
    .copy('src/scripts/background.js', 'public/js')
    .copy('src/components/arrow/arrow.js', 'public/arrow/arrow.js')
    .copy('src/components/arrow/arrow.css', 'public/arrow/arrow.css')
    .copy('src/components/side-menu/side-menu.html', 'public/side-menu/side-menu.html')
    .copy('src/icons/', 'public/icons/')
    .options({
        processCssUrls: false
    });