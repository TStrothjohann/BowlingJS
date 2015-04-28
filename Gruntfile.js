module.exports=function(grunt) {
  grunt.initConfig({
    jasmine: {
      coverage: {
        src: [
          'public/js/app.js',
          'public/js/models/*.js'
          ],
        options: {
          specs:'spec/unit/*.js',
          vendor: [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js'
                    ],
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'coverage/coverage.json',
            report: [
                      {
                        type: 'lcov',
                        dir: 'coverage',
                        print: 'detail'
                      }
                    ],
            thresholds: {
                lines: 75,
                statements: 75,
                branches: 75,
                functions: 90
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default',['jasmine']);
};
