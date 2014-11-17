module.exports = {
	test: {
	    options: {
	        base: './',
	        css: [
	            'dist/css/all.css'
	        ],
	        width: 1366,
	        height: 960
	    },
	    src: 'dist/index.html',
	    dest: 'dist/css/all.critical.css'
	}
}