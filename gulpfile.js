var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVar = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

// style task 

gulp.task('styles', function(){
 	return gulp.src('./app/assets/styles/styles.css')
 		.pipe(postcss([cssImport,cssVar,nested,autoprefixer]))
 		.pipe(gulp.dest('./app/temp/styles'));
})

// HTML task

gulp.task('HTML', function(){
	console.log('HTML is running');

})


// script task

gulp.task('script', function(){
	
})


// default task

gulp.task('default',function() {
	console.log('gulp is running');
});



// watch task

gulp.task('watch', function(){
	watch("./app/index.html", function(){
		gulp.start('HTML');
	});

	watch("./app/assets/styles/styles.css",function(){
		gulp.start('styles');
	})

	})
