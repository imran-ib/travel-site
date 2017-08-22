var gulp = require("gulp"),
	watch = require('gulp-watch');




// gulp default task


gulp.task("default" , function(){
	console.log("Gulp is running!!!");

});



// gulp style task

gulp.task('styles', function(){
	console.log("styles watch is running");
});

// gulp task html 

gulp.task('html',function(){
	console.log('amazing');
})



// gulp watch task
gulp.task("watch", function(){
	watch("./app/index.html", function(){
		gulp.start('html');
	});

	watch("./app/assets/styles/**/*.css", function(){
		gulp.start('styles');
	});
		// .pipe())

});





