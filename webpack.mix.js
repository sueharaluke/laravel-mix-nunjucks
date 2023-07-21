const mix = require('laravel-mix');
require('./src/index');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.setPublicPath('tests/public');
mix.version(['tests/public/test.css']);
mix.njk('tests/src', 'tests/public', {
  // ext: '.html',                // extension for compiled templates
  // data: {},                    // data passed to template
  // marked: null,                // custom options for marted
  // envOptions: {},              // nunjucks environment
  // manageEnv: (compiler) => {}, // hook for managing environment before compliation
});

mix.postCss('tests/css/style.css', 'tests/public/css')