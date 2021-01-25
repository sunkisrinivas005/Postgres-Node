module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      // Configure grunt-contrib-copy
      copy: {
        main: {
          // Allow creating the list of files dinamically (http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)
          expand: true,
          // Execute the command from inside the /src folder
          cwd: 'routes',
          // Also copy subfolders        
          src: '**',
          // Put the final files inside /dist
          dest: 'routes/',
        },
      },
      // Configure grunt-remove-logging
      removelogging: {
        dist: {
          // Clean up all js file inside "dist" or its subfolders
          src: "routes/**/*.js",
        }
      }
    });
  
    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-remove-logging");
   
    // Default task(s) 
    grunt.registerTask('default', ['copy', 'removelogging']);
  }