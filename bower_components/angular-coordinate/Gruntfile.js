// Generated on 2013-09-19 using generator-angular-component 0.2.1
'use strict';

module.exports = function(grunt) {

  // Configurable paths
  var yoConfig = {
    livereload: 35729,
    src: 'src',
    'ghPages': '.gh-pages',
    demo: 'demo',
    template: 'template'
  };

  // Livereload setup
  var lrSnippet = require('connect-livereload')({port: yoConfig.livereload});
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yo: yoConfig,
    meta: {
      banner: '/**\n' +
      ' * <%= pkg.name %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.repository.url %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
      ' */\n'
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      'ghPages': {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yo.ghPages %>/*',
            '!<%= yo.ghPages %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      less: {
        files: ['<%= yo.src %>/{,*/}*.less'],
        tasks: ['less:dist']
      },
      app: {
        files: [
          '<%= yo.src %>/{,*/}*.html',
          '<%= yo.demo %>/{,*/}*.html',
          '{.tmp,<%= yo.src %>}/{,*/}*.css',
          '{.tmp,<%= yo.src %>,<%= yo.demo %>}/{,*/}*.js'
        ],
        options: {
          livereload: yoConfig.livereload
        }
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0' // Change this to '0.0.0.0' to access the server from outside.
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yoConfig.src),
              mountFolder(connect, yoConfig.demo),
              mountFolder(connect, yoConfig.template)
            ];
          }
        }
      },
      'ghpages': {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yoConfig.ghPages)
            ];
          }
        }
      }
    },
    less: {
      options: {
        // dumpLineNumbers: 'all',
        paths: ['<%= yo.src %>']
      },
      'ghPages': {
        files: {
          '<%= yo.src %>/<%= yo.name %>.css': '<%= yo.src %>/<%= yo.name %>.less'
        }
      }
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['<%= yo.src %>/*.js']
      },
      test: {
        options: {
        //  jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js',
        browsers: ['PhantomJS']
      },
      unit: {
        singleRun: true
      },
      server: {
        autoWatch: true
      }
    },
    ngmin: {
      options: {
        banner: '<%= meta.banner %>'
      },
      'ghPages': {
        src: ['<%= yo.ghPages %>/<%= pkg.name %>.js'],
        dest: '<%= yo.ghPages %>/<%= pkg.name %>.js'
      }
    },
    html2js: {
      'ghPages': {
        options: {
          module: null, // no bundle module for all the html2js templates
          base: 'template'
        },
        files: [{
          expand: true,
          src: ['template/*.html'],
          ext: '.html.js'
        }]
      }
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= yo.src %>/*.js',
              '<%= yo.template %>/*.html.js'],
        dest: '<%= pkg.name %>.js'
      },
      'ghPages': {
        src: ['<%= yo.src %>/*.js',
              '<%= yo.template %>/*.html.js'],
        dest: '<%= yo.ghPages %>/<%= pkg.name %>.js'
      }
    },
    copy: {
      'ghPages': {
        files: [{
          expand: true,
          dot: true,
          cwd: './demo',
          dest: './.gh-pages',
          src: [
            '**'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= pkg.name %>.min.js'
      },
      'ghPages': {
        src: '<%= concat.ghPages.dest %>',
        dest: '<%= yo.ghPages %>/angular-<%= pkg.name %>.min.js'
      }
    },
    'gh-pages': {
      options: {
        base: '.gh-pages'
      },
      src: '**'
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'gh-pages') {
      return grunt.task.run(['build', 'open', 'connect:ghpages:keepalive']);
    }

    grunt.task.run([
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'jshint',
    'karma:unit'
  ]);

  grunt.registerTask('build', [
    'html2js',
    'concat:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('release', [
    'test',
    'bump-only',
    'dist',
    'bump-commit'
  ]);

  grunt.registerTask('pre-gh-pages', [
    'clean:ghPages',
    'copy:ghPages',
    'html2js',
    'concat:ghPages',
    'ngmin:ghPages',
    'uglify:ghPages'
  ]);

  grunt.registerTask('publish', [
    'jshint',
    'pre-gh-pages',
    'gh-pages'
  ]);

  grunt.registerTask('default', ['build']);

};
