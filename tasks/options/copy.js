module.exports = {
    dist: {
        expand: true,
        cwd: 'src/',
        src: ['**/*', '!**/*.{sass,scss,js}'],
        dest: 'dist/',
        filter: 'isFile'
    }
};