module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'assets/svg/',
      src: ['*.svg'],
      dest: 'assets/svg/'
    }]
  },
  options: {
    plugins: [
        { removeViewBox: false },               // don't remove the viewbox atribute from the SVG
        { removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
    ]
  }
}