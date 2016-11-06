module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      local_server: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true,
          middleware: require('./middleware')
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);

};