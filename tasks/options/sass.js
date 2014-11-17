module.exports = {
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/sass',

            src: ['**/*.{scss,sass}'],
            dest: 'dist/css',
            ext: '.css'
        }]
    },
    dist: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/sass',

            src: ['**/*.{scss,sass}'],
            dest: 'dist/css',
            ext: '.css'
        }]
    }
};
