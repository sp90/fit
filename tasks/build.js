module.exports = function(grunt) {
    grunt.registerTask('build', ['build:scss', 'build:js', 'build:assets']);

    grunt.registerTask('build:scss', ['sass:dist', 'clean:tmp']);
    grunt.registerTask('build:js', ['clean:js', 'browserify', 'uglify']);
    grunt.registerTask('build:assets', ['copy', 'imagemin', 'critical']);
    
    grunt.registerTask('dev:scss', ['sass:dev', 'clean:tmp']);
};