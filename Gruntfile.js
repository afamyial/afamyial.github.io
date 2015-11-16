module.exports = function(grunt) {
  // Load all grunt tasks automatically
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          base: '.'
        }
      }
    },
    
    copy: {
      main: {
        files: [
          {src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'js/vendor/jquery.min.js'},
          {src: ['bower_components/jquery/dist/jquery.min.map'], dest: 'js/vendor/jquery.min.map'},
          {src: ['bower_components/modernizr/modernizr.js'], dest: 'js/vendor/modernizr.js'},
          {src: ['bower_components/foundation/js/foundation.min.js'], dest: 'js/vendor/foundation.min.js'}
        ]
      }
    }
  });

  grunt.registerTask('build', ['copy']);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'connect'
    ]);
  });

};
