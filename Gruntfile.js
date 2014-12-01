module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    wiredep: {
      target: {
        src: [
          'develop/index.html'
        ]
      }
    },

    useminPrepare :{
      html:'develop/index.html',
      options : {
        dest : 'build'
      }
    },

    usemin : {
      html : ['build/index.html']
    },

    copy : {
      build : {
       expand: true,
       cwd : 'develop/',
       src: ['**/*.html'],
       dest: 'build'
      }
    },

    clean : {
      build : {
        src : 'build'
      },
      tmp : {
        src : '.tmp'
      }
    },

     connect: {
      dev: {
          options: {
            hostname : 'localhost',
            open: true,
            port: 9001,
            base: 'develop'
          }
      },
      live: {
          options: {
            hostname : 'localhost',
            open: true,
            port: 9001,
            base: 'build'
          }
      }
    },

    watch: {
      options: {
          //livereload: true
      },
      
      other: {
        files: ['develop/*.html','develop/partials/*.html','Gruntfile.js']
      },

      js : {
        files: ['develop/js/**/*.js'],
        //tasks : ['clean','jshint', 'uglify']
      },
      
      scss: {
        files: ['develop/css/*.css'],
        //tasks: ['clean','sass','csslint'],
      },
    }

  });

  // Load the plugin that provides the "wiredep" task.
  grunt.loadNpmTasks('grunt-wiredep');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
 // https://github.com/gruntjs/grunt-contrib-uglify

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "usemin" task.
  grunt.loadNpmTasks('grunt-usemin');

    // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('build', [
    'clean:build',
    'copy:build',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'usemin',
    'clean:tmp'
  ]);

  grunt.registerTask('serve', ['connect:dev','watch']);
  grunt.registerTask('live', ['connect:live','watch']);

};