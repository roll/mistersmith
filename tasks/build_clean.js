'use strict';
var gulp = require('gulp');
var del = require('del');


// Clean build directory
gulp.task('build:clean', function (callback) {
    del(['build/**/*'], callback);
});
