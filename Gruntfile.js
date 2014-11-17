module.exports = function (grunt) {
    'use strict';

    function loadConfig(path) {
        var obj = {},
            file,
            key;

        grunt.file.expand(path).forEach(function(option) {
            file = option.replace(/\.js$/,'');
            key = file.match(/[^\/]+$/);

            obj[key] = require(file);
        });

        return obj;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.util._.extend(config, loadConfig('./tasks/options/*'));
    grunt.initConfig(config);

    grunt.loadTasks('tasks');

    require('load-grunt-tasks')(grunt);
};
