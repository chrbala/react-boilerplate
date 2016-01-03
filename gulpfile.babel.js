import gulp from 'gulp'
import plumber from 'gulp-plumber'
import aliasify from 'aliasify'
import babelify from 'babelify'
import livereload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import browserify from 'gulp-browserify'
import envify from 'envify'

try {
	var env = require('../../env')
	Object.assign(process.env, env)
} catch (e) {}

var bundle = {
	src: 'src/routes/**/root.js',
	dest: 'app/'
}

gulp.task('default', () =>
	gulp.src(bundle.src, {read: false})
		.pipe(plumber())
		.pipe(browserify({
			transform: [
				babelify,
				aliasify,
				envify
			],
			debug: true
		}))
		.pipe(gulp.dest(bundle.dest))
)

gulp.task('nodemon', () =>
	nodemon({
		script: 'start.js', 
		ignore: [
			"src/routes",
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

gulp.task('reload', ['default'], () => {
	gulp.src('app/**/*')
		.pipe(livereload())
})

gulp.task('watch', ['nodemon'], () => {
	livereload.listen()
	gulp.watch('src/routes/**/*', ['reload'])
	gulp.watch('src/shared/**/*', ['reload'])
	gulp.watch('src/store/**/*', ['reload'])
	gulp.watch('src/packages/**/*', ['reload'])
	gulp.watch('env.json', ['reload'])
	gulp.watch('package.json', ['reload'])
})