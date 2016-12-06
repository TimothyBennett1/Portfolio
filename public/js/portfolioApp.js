angular.module('portfolioApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('home')
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
