(function () {
  "use strict";

  /*
   oam-hello-world 'oamHelloWorld'
   icaf-spinner 'icafSpinner'
   */
  angular.module('hello.world').directive('helloWorld', helloWorld);

  function helloWorld() {
    return {
      template: '<div ng-bind="greeting"></div>',
      scope: {
        person: '='
      },
      controller: function ($scope) {
        if ($scope.person) {
          $scope.greeting = "Hello, " + $scope.person + "!";
        } else {
          $scope.greeting = "Hello World";
        }
      }
    }
  }
})();