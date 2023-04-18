let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/components/popup/popup.scss', 'addon/css')
    .ts('src/components/popup/popup.ts', 'addon/js').vue()
    .copy('src/components/popup/popup.html', 'addon')
    .copy('src/scripts/background.js', 'addon/js')
    .copy('src/components/arrow/arrow.js', 'addon/arrow/arrow.js')
    .copy('src/components/arrow/arrow.css', 'addon/arrow/arrow.css')
    .copy('src/components/side-menu/side-menu.html', 'addon/side-menu/side-menu.html')
    .copy('src/icons/', 'addon/icons/')
    .options({
        processCssUrls: false
    });