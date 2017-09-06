var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVariables = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrbga = require('postcss-hexrgba');





		gulp.task('styles', function(){
 return gulp.src('./app/assets/styles/styles.css')
 		.pipe(postcss([
 			cssImport,
 			cssVariables,
 			mixins,
 			nested,
 			hexrbga,
 			autoprefixer

 		]))
 		
 		.on('error' ,function(errorInfo){
 			console.log(errorInfo.toString());
 			this.emit('end');
 		})
 		.pipe(gulp.dest('./app/temp/styles'));
})
