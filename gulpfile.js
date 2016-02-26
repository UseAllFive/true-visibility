var gulp        = require( 'gulp' );
var fs          = require( 'fs' );
var uglify      = require( 'gulp-uglify' );
var header      = require( 'gulp-header' );
var rename      = require( 'gulp-rename' );
var browserify  = require( 'browserify' );

var now         = new Date();
var _package    = require( './package.json' );

var licence     = '/*! true-visibility v' + _package.version + ' | (c) 2016-' + now.getUTCFullYear() + ' : MIT license - ' + _package.homepage + '/license.txt */\n';


gulp.task( 'build', function()
{
    return gulp.src( './src/true-visibility.js' )
        .pipe(  uglify() )
        .pipe( rename( 'true-visibility.min.js' ) )
        .pipe( header( licence ) )
        .pipe( gulp.dest( 'dist' ) );
});


gulp.task( 'default', [], function()
{
    gulp.start( [ 'build' ] );
} );
