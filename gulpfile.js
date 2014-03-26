var gulp = require("gulp"),
    stylus = require('gulp-stylus'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(watch())
        .pipe(livereload());
});

gulp.task('stylus', function () {
    gulp.src('./src/css/**/*.styl')
        .pipe(watch())
        .pipe(livereload());
});

gulp.task('scripts', function () {
    gulp.src('./src/js/*.js')
        .pipe(watch())
        .pipe(livereload());
});

gulp.task("default", ['html','scripts','stylus']);
