var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
});

gulp.task('css', function(){
  return gulp.src(['public/src/css/stylesheet.css'])
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('all.css'))
    .pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});



gulp.task('html', function(){
  return browserSync.reload();
});


gulp.task('default', ['browserSync', 'css'], function() {
  gulp.watch('public/src/css/*.css', ['css']);
  gulp.watch('public/**/*.html', ['html']);
});
