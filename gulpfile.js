'use strict'

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

const srcIncludes = [
  '**/*.js',
  '!foo.js',
  '!node_modules/**',
  '!coverage/**'
]

gulp.task('lint', function lintTask () {
  return gulp
    .src(srcIncludes)
    .pipe($.standard())
    .pipe($.standard.reporter('default', { breakOnError: true }))
})

gulp.task('pre-test', function preTest () {
  return gulp
    .src(srcIncludes)
    .pipe($.istanbul())
    .pipe($.istanbul.hookRequire())
})

gulp.task('test', ['pre-test'], function testTask () {
  return gulp
    .src(['test/*.js'])
    .pipe($.mocha({ui: 'tdd', reporter: 'min'}))
    .pipe($.istanbul.writeReports())
})

gulp.task('docs', function gendocs () {
  const fs = require('fs')
  const jsdoc2md = require('jsdoc-to-markdown')
  const output = jsdoc2md.renderSync({files: 'lib/*.js'})
  fs.writeFileSync('api.md', output)
})

gulp.task('default', ['lint', 'test', 'docs'])
