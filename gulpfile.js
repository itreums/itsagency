const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    console.log("style")
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(concat('style.scss'))    
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())     
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/style/'));


};
  
    
exports.buildStyles=buildStyles
exports.watch = function () {
    gulp.watch('assets/scss/**/*.scss', gulp.series('buildStyles'));
};