var gulp = require ('gulp'),
	 	// sass = require ('gulp-sass'),
	 	// browserSynk = require ('browser-sync'),
	 	// concat = require ('gulp-concat'),
	 	// uglify = require ('gulp-uglify'),
	 	// rename = require ('gulp-rename'),
	 	// imagemin = require('gulp-imagemin'),
	 	// watch = require('gulp-watch'),
	 	// autoprefixer = require('gulp-autoprefixer'),
	 	// cleanCSS = require('gulp-clean-css'),
	 	// browserSync = require('browser-sync').create();
	 	// del = require ('del');

gulp.task('default', function() {
	del('dist');
})




// gulp.task('serve', ['styles', 'scripts', 'imagemin'], function() {
// 	browserSynk.init({
// 		server: 'app/'
// 	});
// 	browserSynk.watch('app/**/*.*').on('change', browserSynk.reload);

// });
// gulp.task('watch', function () {
//     gulp.watch('sass/*.sass', ['styles']);
//     gulp.watch('app/libs/**/*.js', ['scripts']);
//     gulp.watch('app/js/*.js').on("change", browserSync.reload);
//     gulp.watch('app/*.html').on('change', browserSync.reload);
// });

// gulp.task('scripts', function() {
// 	return gulp.src('app/js/*.js')
// 		.pipe(concat('app/js/all.js'))
// 		.pipe(uglify())
// 	  .pipe(gulp.dest('.app/js/'));

// });

// gulp.task('styles', function () {
//   return gulp.src('./sass/**/*.sass')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(rename({suffix: '.min', prefix : ''}))
//     .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.stream());

// });

// gulp.task('imagemin', function() {
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// });

// gulp.task('default', ['serve', 'watch']);

/**/;module.exports = gulp;