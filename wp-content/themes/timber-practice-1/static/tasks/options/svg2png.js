module.exports = {
  dist: {
    files: [{ 
      flatten: true,
      cwd: 'assets/svg/', 
      src: ['*.svg'], 
      dest: 'assets/img/' }
    ]
  }
}