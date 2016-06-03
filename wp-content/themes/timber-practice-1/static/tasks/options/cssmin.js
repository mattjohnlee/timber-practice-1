module.exports = {
  combine: {
    files: [{
      expand: true,
      cwd: 'assets/css/prefixed',
      src: ['*.css', '!*.min.css'],
      dest: 'assets/css/prefixed',
      ext: '.min.css'
    }]
  }
}