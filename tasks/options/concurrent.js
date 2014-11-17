module.exports = {
    build: {
      tasks: ['build:js', 'build:sass', 'build:assets'],
      options: {
         logConcurrentOutput: true
      }
    },
	watch: {
		tasks: ['watch:js', 'watch:sass', 'watch:assets'],
		options: {
			logConcurrentOutput: true
		}
	}
};