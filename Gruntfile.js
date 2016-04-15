module.exports = function (grunt) {

   	//Load required Grunt tasks.
	grunt.loadNpmTasks ('grunt-contrib-concat');
	grunt.loadNpmTasks ('grunt-contrib-watch');
	grunt.loadNpmTasks ('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

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
		cssmin: {
		  	target: {
		    	files: [{
			      	expand: true,
			      	cwd: 'build/css',
			      	src: ['*.css', '!*.min.css'],
			      	dest: 'build/css',
			      	ext: '.min.css'
		    	}]
		  	}
		},
		uglify: {
		    js: {
		      	files: {
		        	'build/js/built.min.js': ['build/js/built.js']
		      	}
	    	}
	  	}
	});

	// registering tasks
	grunt.registerTask ('default', ['concat', 'cssmin', 'uglify', 'watch']);
};