module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['js/*.js', 'js/**/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      //spawn: false,
    }
  },
  css: {
    files: ['sass/*.scss', 'sass/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      //spawn: false,
    }
  },
  svgs: {
    files: 'assets/svg/*.svg',
    tasks: ['svgmin', 'svgstore', 'svg2png'],
    options: {
      //livereload: true,
    },
  }
}