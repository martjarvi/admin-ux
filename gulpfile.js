var gulp = require('gulp'),
	path = require('path'),
	to5 = require('gulp-babel'),
	sass = require('gulp-sass'),
	bundler = require('aurelia-bundler');
gulp.task('sass:compile', function(done) {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass()
			.on('error', sass.logError))
		.pipe(gulp.dest('./styles'));
});
gulp.task('default', ['sass:compile'], function() {});
var config = {
	force: true,
	baseURL: '.',
	bundles: {
		"dist/app": {
			"includes": ["main.js", "[./src/**/*.js]", "./src/**/*.html!text"],
			"options": {
				"inject": true,
				"minify": true
			}
		},
		"dist/aurelia": {
			"includes": ['./jspm_packages/npm/**/aurelia-*.js', './jspm_packages/npm/**/aurelia-validation*/resources/*.js'],
			"options": {
				"inject": true,
				"minify": true
			}
		}
	}
};
gulp.task('bundle', ['sass:compile', 'build'], function() {
	return bundler.bundle(config);
});
gulp.task('unbundle', function() {
	return bundler.unbundle(config);
});
gulp.task('release', ['bundle'], function() {
	gulp.src(['./index.html', './config.js', './dist/app.js', './dist/aurelia.js', './images/**/*', './styles/*.css', './font/**/*', './jspm_packages/system*'], {
			base: './'
		})
		.pipe(gulp.dest('./build'));
})