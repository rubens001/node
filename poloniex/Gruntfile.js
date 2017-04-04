module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["./public/html/dist/**/*"],
        jshint: {
            files: ['Gruntfile.js','./public/html/js/**/*.js','./service/*.js','./service/**/*.js','./app/*.js'],
            options: {
                esnext:6,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/html/bower_components/jquery/dist/jquery.min.js',
                      'public/html/bower_components/angular/angular.min.js',
                      'public/html/bower_components/angular-route/angular-route.min.js',
                      'public/html/bower_components/angular-resource/angular-resource.min.js',
                      'public/html/bower_components/angular-sanitize/angular-sanitize.min.js',
                      'public/html/bower_components/angular-touch/angular-touch.min.js',
                      'public/html/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                      'public/html/bower_components/notifyjs/dist/notify.js',
                      'public/html/bower_components/autobahnjs/autobahn.min.js',
                      'public/html/bower_components/lodash/dist/lodash.min.js',
                      'public/html/bower_components/highcharts/js/highcharts.js',
                      'public/html/bower_components/highcharts/js/modules/exporting.js',
                      'public/html/js/**/*.js'],
                dest: 'public/html/dist/<%= pkg.name %>.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        '<%= concat.dist.dest %>': ['<%= concat.dist.dest %>']
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/html/dist/<%= pkg.name %>2.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        env: {
            options: {
                //Shared Options Hash
            },
            dev: {
                NODE_ENV: 'dev'
            },
            prod: {
                NODE_ENV: 'prod'
            }
        },
        includeSource: {
            options: {
                basePath: 'public',
                baseUrl: '../', // '../html'
                templates: {
                    html: {
                      js: '<script type="text/javascript" src="{filePath}"></script>',
                      css: '<link rel="stylesheet" type="text/css" href="{filePath}"></link>',
                    }
                }
            },
            myTarget: {
                files: {
                    './public/html/grunt/generated_include.html': './public/html/grunt/include_template.html'
                }
            }
        },
        preprocess: {
            dev: {
                src: './public/html/grunt/generated_include.html',
                dest: './index.html'
            },
            prod: {
                src: './public/html/grunt/generated_include.html',
                dest: './index.html'
            }
        },
        bower: {
            install: {}
        }
//        ,
//        'closure-compiler':{
//            frontend: {
//              closurePath: 'src/test/resources',
//              js: './src/main/webapp/html/dist/crypto.js',
//              jsOutputFile: './src/main/webapp/html/dist/crypto.close.min.js',
//              maxBuffer: 500,
//              options: {
//                compilation_level: 'SIMPLE_OPTIMIZATIONS',
//                language_in: 'ECMASCRIPT5_STRICT'
//              }
//            }
//          }

    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // compilation_level: 'WHITESPACE_ONLY' / 'SIMPLE_OPTIMIZATIONS' / 'ADVANCED_OPTIMIZATIONS'
    // task : 'closure-compiler' / 'uglify'

    grunt.registerTask('dev', ['clean', 'bower', 'jshint', 'concat', 'env:dev', 'includeSource', 'preprocess:dev']);
    grunt.registerTask('prod', ['clean', 'bower', 'jshint', 'concat', 'uglify', 'env:prod', 'includeSource', 'preprocess:prod']);

};
