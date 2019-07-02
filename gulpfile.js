const gulp = require ("gulp");
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const pug = require("gulp-pug");

//Tasks functions
const compile_scss = ()=>{
    return gulp.src("./src/sass/main.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
}

const pug_compiler = ()=>{
    return gulp.src("./src/pug_templates/index.pug")
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest("./build/"))
}


//watcher fn
const watch_fn = ()=>{
    gulp.watch("./src/sass/**/*.scss",compile_scss);
    gulp.watch("./src/pug_templates/**/*.pug", pug_compiler)
}

exports.build = gulp.series(pug_compiler, compile_scss, watch_fn)








