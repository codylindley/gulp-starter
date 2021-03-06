var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var config     = require('../config');

gulp.task('watch', function() {
	var server = livereload();

	var reload = function(file) {
		server.changed(file.path);
	};

	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch(['build/**']).on('change', reload);

	// Note: Javascript watching is handled by watchify
	// in gulp/tasks/browserify.js, when this flag is true
	config.isWatching = true;
});
