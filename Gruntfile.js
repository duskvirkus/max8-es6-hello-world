module.exports = function (grunt) {

  grunt.initConfig({

    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env'],
      },
      dist: {
        files: {
          'max/js/temp/hello-world.js': 'src/hello-world.js',
        },
      },
      simple: {
        files: {
          'max/js/hello-world.js': 'src/hello-world.js',
        },
      }
    },

    uglify: {
      build: {
        src: ['max/js/temp/hello-world.js'],
        dest: 'max/js/hello-world.js',
      },
    },

    clean: [
      'max/js/temp/'
    ],

  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['babel:dist', 'uglify:build', 'clean']);
  grunt.registerTask('simple-build', ['babel:simple']);

}