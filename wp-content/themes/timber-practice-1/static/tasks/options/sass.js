module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded',
      sourcemap: 'none'
    },
    files: {
      'assets/css/main.css': 'sass/main.scss', // 'destination': 'source'
      'assets/css/styleguide.css': 'sass/styleguide.scss' // 'destination': 'source'
    }
  }
}