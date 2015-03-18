module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
         * General config settings
         * app location or anythting
         * else you want to add.
         */
        config: {

            /*
             * NOTE: App path defaults to 'app' if its not set in bower.json.
             */
            app: require('./bower.json').appPath || 'app',

            /*
             * NOTE: This isn't really needed, my host file points hostname == localhost
             */
            hostname: 'alerts.ariaz.me'
        },

        /*
         * Grunt sass
         */
        sass: {
            options: {
                quiet: true,
                precision: 5
            },
            dev: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'app/style.css': 'css/style.scss',
                }
            }
        },

        /*
         * Grunt ugly...You're UGLY!@#@!#
         */
        uglify: {
            dev: {
                options: {
                    beautify: false,
                    mangle: false
                },
                files: {
                    'app/script.min.js': [
                        'js/init.js',
                        'js/fn.js',
                        'js/eventBinds.js',
                        'js/ajax.js',
                        '!js/script.min.js',
                    ]
                }
            }
        },


        /*
         * Grunt watch
         */
        watch: {
            html: {
                files: ['app/*.html','app/*.php'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['css/*.sass','css/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/*.js', '!js/script.min.js'],
                tasks: ['uglify:dev'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/*.html',
                    'app/*.css',
                    'css/*.sass'
                ]
            }
        },

        /*
         * Grunt connect + livereload
         * settings.
         */
        connect: {
            options: {
                hostname: '<%= config.hostname %>',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.app %>'
                    ]
                }
            }
        }
    });

    //TODO: Need to add a prod task, that doesn't watch, and concatenates all my js.

    grunt.registerTask('default', [
        'sass:dev',
        'uglify:dev',
        'connect:livereload',
        'watch'
    ]);
};