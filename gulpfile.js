const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");
var uglify = require("gulp-uglify");

gulp.task("js", function(done) {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"));
    done();
});

gulp.task('server', function() {
  return browserSync.init({
    server: {
      baseDir: '.'
    }
  })
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});


gulp.task('sass', function() {
  return gulp.watch("./css/**/*.scss", function() {
    return (
      gulp.src('./css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
        .pipe(gulp.dest('./css/')));
  });
});

gulp.task('watch', gulp.task('server'), function () {
	gulp.watch('./css/**/*.scss', gulp.task('sass'));
	gulp.watch('./css/**/*.css', gulp.task('bs-reload'));
	gulp.watch('./*.html', gulp.task('bs-reload'));
	gulp.watch('./script/**/*.js', gulp.task('bs-reload'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));