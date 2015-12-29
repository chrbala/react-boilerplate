import gulp from 'gulp'
import plumber from 'gulp-plumber'
import aliasify from 'aliasify'
import babelify from 'babelify'
import liveReload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import browserify from 'gulp-browserify'

var bundle = {
	src: 'src/components/**/root.js',
	dest: 'app/'
}

gulp.task('default', () =>
	gulp.src(bundle.src, {read: false})
		.pipe(plumber())
		.pipe(browserify({
			transform: [
				babelify,
				aliasify
			],
			debug: true
		}))
		.pipe(gulp.dest(bundle.dest))
)

gulp.task('nodemon', () =>
	nodemon({
		script: 'start.js', 
		ignore: [
			"src/components",
			"src/shared",
			"src/store",
			"app/*",
			"gulpfile.babel.js"
		],
		ext: 'js|json', 
		env: {
			NODE_ENV: 'development'
		}
	})
)

gulp.task('watch', ['nodemon'], () => {
	liveReload.listen()
	gulp.watch('src/components/*', ['default'])
	gulp.watch('src/shared/*', ['default'])
	gulp.watch('src/store/*', ['default'])
})