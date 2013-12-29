module.exports = function (grunt) {

  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // grunt.loadTasks('./tasks');

  grunt.initConfig({
    compile_dir: 'dist/',

    pkg: grunt.file.readJSON('package.json'),

    src: {
      gather: ['src/*.js']
    },

    concat: {
      options: {
        banner: "/**\n * Built at <%= grunt.template.today('UTC:yyyy-mm-dd h:MM:ss TT Z') %> \n" +
                " * from https://github.com/abachman/jaws \n */\n\n"
      },
      dist: {
        src: ['src/core.js', 'src/sprite.js', 'src/*.js', 'src/extras/*.js'],
        dest: 'dist/jaws.js',
      },
    },

    uglify: {
      options: {
        banner: "/* Built at <%= grunt.template.today('UTC:yyyy-mm-dd h:MM:ss TT Z') %> \n" +
                "   from https://github.com/abachman/jaws */\n"
      },
      my_target: {
        files: {
          'dist/jaws.min.js': ['dist/jaws.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['concat', 'uglify']);
};

