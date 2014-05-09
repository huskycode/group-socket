module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      build_test_driver: {
        command: "go build test/driver/driver.go"
      }
    },
    external_daemon: {
      test_driver: {
        cmd: __dirname + "/driver",
        options: {
          verbose: true,
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-external-daemon');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', [
      'shell:build_test_driver', 
      'external_daemon:test_driver'
  ]);
};
