var gulp = require('gulp'),
	path = require('path'),
	to5 = require('gulp-babel'),
	sass = require('gulp-sass'),
	bundler = require('aurelia-bundler');

gulp.task('sass:compile', function (done) {
  return gulp.src('./sass/**/*.scss')
			 .pipe(sass()
				   .on('error', sass.logError))
			 .pipe(gulp.dest('./styles'));
});

gulp.task('default', ['sass:compile'], function () {
});

var babelConfig = {
  filename: '',
  filenameRelative: '',
  sourceMap: true,
  sourceRoot: '',
  moduleRoot: path.resolve('src').replace(/\\/g, '/'),
  moduleIds: false,
  comments: false,
  compact: false,
  code: true,
  presets: ['es2015-loose', 'stage-1'],
  plugins: [
	'syntax-flow',
	'transform-flow-strip-types',
	'transform-decorators-legacy',
	'transform-es2015-modules-systemjs'
  ]
};
gulp.task('build', function () {
  gulp.src(['./src/**/*.html', './libs/**/*', './styles/*.css', './images/**/*', './styles/*.css', './font/**/*'], {base: './'})
	  .pipe(gulp.dest('./dist'));
  return gulp.src('./src/**/*.js', {base: './'})
			 .pipe(to5(babelConfig))
			 .pipe(gulp.dest('./dist'));
});

var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: {
	"dist/app": {
	  "includes": [
		"./src/main.js",
		"[./src/**/*.js]",
		"./src/**/*.html!text"
	  ],
	  "options": {
		"inject": true,
		"minify": true
	  }
	},
	"dist/aurelia": {
	  "includes": [
		'./jspm_packages/npm/**/aurelia-*.js',
		'./jspm_packages/npm/**/aurelia-validation*/resources/*.js'
	  ],
	  "options": {
		"inject": true,
		"minify": true
	  }
	}
  }
};
gulp.task('bundle', ['sass:compile', 'build'], function () {
  return bundler.bundle(config);
});

gulp.task('unbundle', function () {
  return bundler.unbundle(config);
});

gulp.task('release', ['bundle'], function () {
  gulp.src(['./index.html', './config.js', './dist/app.js', './dist/aurelia.js', './images/**/*', './styles/*.css', './font/**/*', './jspm_packages/system*'], {base: './'})
	  .pipe(gulp.dest('./build'));
})