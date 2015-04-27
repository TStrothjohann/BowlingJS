module.exports=function(grunt) {
  grunt.initConfig({
    jasmine: {
      coverage: {
        src:'models/*.js',
        options: {
          specs:'spec/*.js',
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
