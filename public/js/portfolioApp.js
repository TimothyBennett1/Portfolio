angular.module('portfolioApp', ['ui.router', 'headroom'])
  .config(function($urlRouterProvider, $stateProvider) {
    console.log(Headroom.options);
    $urlRouterProvider.otherwise('home')
    console.log();
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './js/features/Home/home-Tmpl.html',
        controller: 'portfolioCtrl',
      })
      .state('work', {
        url: '/work',
        templateUrl: './js/features/Work/work-Tmpl.html',
        controller: 'portfolioCtrl'
      })
      .state('tech', {
        url: '/technologies',
        templateUrl: './js/features/Tech/tech-Tmpl.html',
        controller: 'portfolioCtrl'
      })
  })
  .directive('header', ($rootScope) => {
    return {
      restrict: 'AE',
      templateUrl: './js/features/directives/Header.html',
      controller: 'portfolioCtrl',
      link: function(scope, elem, attr) {
        angular.element(document).on('scroll', function() {
          scope.scrollPos = document.body.scrollTop;
          if (scope.scrollPos >= 678 && scope.name === 'home') {
            elem.addClass('dark');
            elem.find('path').removeClass('a');
            elem.find('path').addClass('darksvg');
          }
          else if (scope.scrollPos <= 678 && scope.name === 'home') {
            elem.removeClass('dark');
            elem.find('path').removeClass('darksvg');
            elem.find('path').addClass('a');
          }
        })
        $rootScope.$on('$stateChangeSuccess',function() {
          if (scope.name === 'tech' || scope.name === 'work') {
            elem.addClass('dark');
            elem.find('small-nav-icon').addClass('dark')
            elem.find('path').addClass('darksvg');
            elem.find('path').removeClass('a');
            elem.find('path').addClass('darksvg');
          }
          else if (scope.name === 'home'){
            elem.removeClass('dark');
            elem.find('small-nav-icon').removeClass('dark')
            elem.find('path').removeClass('darksvg');
            elem.find('path').addClass('a');
          }
        });
      }
    }
  })
  .directive('footer', () => {
    return {
      restrict: 'AE',
      templateUrl: './js/features/directives/Footer.html'
    }
  })
