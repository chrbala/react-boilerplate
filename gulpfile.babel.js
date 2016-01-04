import { readFileSync } from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import aliasify from 'aliasify'
import babelify from 'babelify'
import livereload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import _browserify from 'browserify'
import _watchify from 'watchify'
import envify from 'envify'
import uglify from 'gulp-uglify'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import source from 'vinyl-source-stream'

var env = Object.assign({}, process.env)

var options = {
	root: 'src/routes/root.js',
	dest: 'app/',
	name: 'bundle.js'
}

var watch = false

var logError = e => gutil.log(gutil.colors.red('ERROR:'), e.message)

var browserify = (entry, name) => {
	var args = Object.assign({}, _watchify.args, {
		entries: [entry],
		transform: [
			babelify,
			aliasify,
			envify
		],
		insertGlobals: !process.env.DEV,
		debug: !!process.env.DEV
	})

	return _browserify(args)
}

var watchify = (entry, name) =>
	_watchify(browserify(entry, name))

var bundle = (entry, name) => {
	var src = watch ? watchify : browserify
	return src(entry, name).bundle()
		.on('error', logError)
		.pipe(source(name))
}

gulp.task('default', () => {
	try {
		var _env = JSON.parse(readFileSync('./env.json', 'utf8'))
		process.env = Object.assign({}, env, _env)
	} catch (e) {
		logError(new Error('env.json not found'))
	}

	return bundle(options.root, options.name)
		.pipe(gulpif(!!process.env.DEV, plumber()))
		.pipe(gulpif(!!process.env.PRODUCTION, uglify({mangle: {toplevel: true}})))
		.pipe(gulp.dest(options.dest))
})

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
	watch = true
	livereload.listen()
	gulp.watch('src/routes/**/*', ['reload'])
	gulp.watch('src/shared/**/*', ['reload'])
	gulp.watch('src/store/**/*', ['reload'])
	gulp.watch('src/packages/**/*', ['reload'])
	gulp.watch('env.json', ['reload'])
	gulp.watch('package.json', ['reload'])
})