module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    wiredep: {
      target: {
        src: [
          'dev/index.html'
        ]
      }
    },

    useminPrepare :{
      html:'dev/index.html',
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
       cwd : 'dev/',
       src: ['**/*.html'],
       dest: 'build'
      }
    },

    clean : {
      build : {
        src : 'build'
      }
    },

     connect: {
      dev: {
          options: {
            hostname : 'localhost',
            open: true,
            port: 9001,
            base: 'dev'
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
        files: ['dev/*.html','dev/partials/*.html','Gruntfile.js']
      },

      js : {
        files: ['dev/js/**/*.js'],
        //tasks : ['clean','jshint', 'uglify']
      },
      
      scss: {
        files: ['dev/css/*.css'],
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
    'usemin'
  ]);

  grunt.registerTask('serve', ['connect:dev','watch']);
  grunt.registerTask('live', ['connect:live','watch']);

};