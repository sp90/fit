module.exports = {
	options: {
	  mangle: {
	    except: ['jQuery', 'angular']
	  }
	},
	dist: {
	  files: {
	    'dist/js/index.js': ['dist/js/index.js']
	  }
	}
}