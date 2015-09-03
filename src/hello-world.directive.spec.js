(function () {

  'use strict';

  describe('hello world directive', function () {

    var $rootScope, createElement, scope;

    var helloWorldModule;

    beforeEach(module('hello.world', function () {
      helloWorldModule = angular.module('hello.world');
    }));

    beforeEach(inject(function ($compile, _$rootScope_) {
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      /*
        <div><hello-world></hello-world></div>
        <div><hello-world>Hello World!</hello-world></div>
       */
      createElement = function () {
        var el = $compile('<hello-world person="person"></hello-world>')(scope);
        $rootScope.$digest();
        return el;
      };

    }));

    it('has the module for the directive', function () {
      expect(helloWorldModule).toBeDefined();
    });

    it('creates the text "Hello World"', function () {
      var element = createElement();
      expect(element.html()).toMatch(/Hello World/);
    });

    it('creates the text "Hello Jarvis"', function () {
      scope.person = "Jarvis";
      var element = createElement();
      expect(element.html()).toMatch(/Hello, Jarvis!/);
    });

  });

})();