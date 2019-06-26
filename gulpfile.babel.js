'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');

var less = require('gulp-less');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');



sass.compiler = require('node-sass');

var paths = {
  styles: ['./build/static/css/**/*.css'],
  scripts: ['./build/static/js/**/*.js'],
}
var autoprefixerOptions = {
  browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
};



export function style() {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'build',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/style'))

}


export function script() {
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('build.min.js'))
    .pipe(gulp.dest('dist/script'))

}

export function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(['dist']);
}









export function watch() {
  gulp.watch('./build/static/css/**/*.css', style);
  gulp.watch('./build/static/js/**/*.js', script);


}

var build = gulp.series(clean, gulp.parallel(style, script));

exports.default = build;