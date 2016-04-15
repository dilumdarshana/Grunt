module.exports = function (grunt) {

   	//Load required Grunt tasks.
	grunt.loadNpmTasks ('grunt-contrib-concat');
	grunt.loadNpmTasks ('grunt-contrib-watch');

	// Project configuration.
	grunt.initConfig ({
	  	concat: {
		    js: {
		      src: ['js/script1.js', 'js/script2.js'],
		      dest: 'build/js/built.js',
		    },
		    css: {
		      src: ['css/screen.css', 'css/style.css'],
		      dest: 'build/css/main.css',
		    }
  		},
  		watch: {
		  	js: {
		    	files: 'js/**/*.js',
		    	tasks: ['concat:js']
		  	},
		  	css	: {
		    	files: 'css/**/*.js',
		    	tasks: ['concat:css']
		  	}
		},
	});

	// registering tasks
	grunt.registerTask ('default', ['concat', 'watch']);
};