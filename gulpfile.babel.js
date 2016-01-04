import { readFileSync } from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import aliasify from 'aliasify'
import babelify from 'babelify'
import livereload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import browserify from 'browserify'
import _watchify from 'watchify'
import envify from 'envify'
import uglify from 'gulp-uglify'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import source from 'vinyl-source-stream'

var env = Object.assign({}, process.env)

var bundle = {
	root: 'src/routes/root.js',
	dest: 'app/',
	name: 'bundle.js'
}

var watchify = (entry, name) => {
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

	return _watchify(browserify(args)).bundle()
		.on('error', e => gutil.log(gutil.colors.red('ERROR:'), e.message))
		.pipe(source(name))
}

gulp.task('default', () => {
	try {
		var _env = JSON.parse(readFileSync('./env.json', 'utf8'))
		process.env = Object.assign({}, env, _env)
	} catch (e) {
		console.log('env.json not found')
	}

	return watchify(bundle.root, bundle.name)
		.pipe(gulpif(process.env.DEV, plumber()))
		.pipe(gulpif(!!process.env.PRODUCTION, uglify({mangle: {toplevel: true}})))
		.pipe(gulp.dest(bundle.dest))
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
	livereload.listen()
	gulp.watch('src/routes/**/*', ['reload'])
	gulp.watch('src/shared/**/*', ['reload'])
	gulp.watch('src/store/**/*', ['reload'])
	gulp.watch('src/packages/**/*', ['reload'])
	gulp.watch('env.json', ['reload'])
	gulp.watch('package.json', ['reload'])
})