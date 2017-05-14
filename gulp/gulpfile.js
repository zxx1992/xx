// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// lint任务来检查js/目录下的js文件有没有报错或者警告
gulp.task('lint', function() {
    gulp.src('src/plugin.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass/下的scss文件，并把编译完成的css文件保存到/css目录下
gulp.task('sass', function() {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    //以数组的形式匹配多个文件，或者多种文件
    gulp.src(['src/plugin.js','src/plugin2.js'])
    //合并所有的js文件，输出到dist/目录下，
        .pipe(concat('all.js'))
        .pipe(gulp.dest('/dist'))
        .pipe(rename('all.min.js'))
        //压缩
        .pipe(uglify())
        //输出地址
        .pipe(gulp.dest('dist'));
});

// 默认任务
gulp.task('default', function(){
    // .run方法关联和运行我们定义的任务，
    gulp.run('lint', 'sass', 'scripts');

    // 监听指定目录下的文件变化，
    gulp.watch('src/plugin.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });
});