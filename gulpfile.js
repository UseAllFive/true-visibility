var gulp            = require( 'gulp' );
var fs              = require( 'fs' );
var uglify          = require( 'gulp-uglify' );
var header          = require( 'gulp-header' );
var browserify      = require( 'browserify' );

var now             = new Date();
var _package        = require( './package.json' );

var licenceLong     = '/*!\n' +
                      ' * true-visibility v' + _package.version + '\n' +
                      ' * ' + _package.homepage + '\n' +
                      ' *\n' +
                      ' * Copyright 2016-' + now.getUTCFullYear() + '\n' +
                      ' * Released under the MIT license\n' +
                      ' * ' + _package.homepage + '/license.txt\n' +
                      ' *\n' +
                      ' * Date: ' + now.toDateString() + '\n' +
                      ' */\n';

var licenceShort    = '/*! true-visibility v' + _package.version + ' | (c) 2016-' + now.getUTCFullYear() + ' ' + _package.homepage + '/license.txt */\n';


gulp.task( 'build', function()
{
    browserify( './src/true-visibility.js' )
        .bundle()
        .pipe( fs.createWriteStream( __dirname + '/dist/true-visibility.min.js' ) )
        .on( 'finish', function()
        {
            gulp.src( './dist/true-visibility.min.js' )
                .pipe( uglify() )
                .pipe( header( licenceShort ) )
                .pipe( gulp.dest( './dist/' ) );
        });
});


gulp.task( 'default', [], function()
{
    gulp.start( [ 'build' ] );
} );
