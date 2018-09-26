var ghPages = require('gulp-gh-pages'),
  gulp = require('gulp'),
  runSequence = require('run-sequence').use(gulp),
  shell = require('gulp-shell');

/////////////////////////// DEPLOY TASKS ///////////////////////////
module.exports = function() {

  gulp.task('circleci', function() {
    return gulp.src('.circleci/config.yml').pipe(gulp.dest('_site/.circleci/'));
  });


  gulp.task('push-gh-master', shell.task(['git push origin master']));

  gulp.task('push-gh-pages', function() {
    return (gulp
        .src('_site/**/*', { dot: true })
        // .src(['_site/**/*', '_site/.**/*' ])
        .pipe(ghPages({ force: true })) );
  });

  gulp.task('deploy', function(callback) {
    runSequence('build:prod', 'circleci', 'push-gh-master', 'push-gh-pages', callback);
  });
};
