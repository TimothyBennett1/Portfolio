angular.module('portfolioApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: './js/features/Home/home-Tmpl.html',
        controller: 'portfolioCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: './js/features/Projects/project-Tmpl.html',
        controller: 'portfolioCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: './js/features/About/about-Tmpl.html',
        controller: 'portfolioCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './js/features/Contact/contact-Tmpl.html',
        controller: 'portfolioCtrl'
      })
      .state('tech', {
        url: '/technologies',
        templateUrl: './js/features/Tech/tech-Tmpl.html',
        controller: 'portfolioCtrl'
      })
  })
