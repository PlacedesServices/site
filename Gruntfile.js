module.exports = function(grunt){

	// require('load-grunt-tasks')(grunt);

	//Configuration
	grunt.initConfig({
	    browserSync: {
	      bsFiles: {
	        src: ['**/*.html', '**/*.css'
	    	]
	      },
	      options: {
	      	server: {
						baseDir: "./"
					}
	      }
	    }
	})

	//Load plugins
	grunt.loadNpmTasks('grunt-browser-sync');

	//Register tasks
	grunt.registerTask('default', ['browserSync']);
};

