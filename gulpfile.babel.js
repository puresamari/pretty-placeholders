import gulp from 'gulp';
import webpack from 'gulp-webpack';
import babel from 'gulp-babel';
import named from 'vinyl-named';
import sass from 'gulp-sass';

import BABEL_CONF from './gulp-configs/babel.config.js';
import WEBPACK_CONF from './gulp-configs/webpack.config.js';

gulp.task('es6-compile', () => {
  return gulp.src('src/app/app.js')
    .pipe(babel(BABEL_CONF))
    .pipe(named())
//    .pipe(webpack(WEBPACK_CONF))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', () => {
  return gulp.src('src/style/style.scss')
    .pipe(sass())
    .pipe(named())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch('src/app/*.js', ['es6-compile']);
    gulp.watch('src/style/*.scss', ['sass']);
});

gulp.task('default', ['es6-compile','sass','watch']);