const gulp = require ("gulp");
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

//Tasks functions
const compile_scss = ()=>{
    return gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
}

//watcher fn
const watch_fn = ()=>{
    gulp.watch("./src/sass/**/*.scss",compile_scss);
}

//tast register
gulp.task("scss", compile_scss);
gulp.task('watch', watch_fn);






