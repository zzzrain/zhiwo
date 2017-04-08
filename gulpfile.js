// 请求模块
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// 创建任务
gulp.task('create',function(){
	// 寻找文件
	gulp.src('src/sass/*.scss')
		// 编译文件
		.pipe(sass({outputStyle:'expanded'}))
		// 输出文件
		.pipe(gulp.dest('src/css'))
		// 自动刷新页面
		.pipe(browserSync.reload({stream:true}))
});

// 监听任务
gulp.task('watch',function(){
	// 当文件修改时，执行任务
	gulp.watch('src/sass/*.scss',['create']);
});

// 自动刷新
gulp.task('server',function(){
	browserSync({
		server:{baseDir: "src"},
		port:4000,

		// 代理
		// proxy:'http://localhost/project/src/',
		file:['src/*html']
	});
	gulp.watch('src/sass/*.scss',['create']);
});
