module.exports = function(grunt) {
    grunt.registerTask('dev', ['clean:dist', 'concurrent:build', 'concurrent:watch']);
};
