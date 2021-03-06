// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('App', ['ionic','ngMessages', 'App.controllers', 'App.services', 'ngCordova', 'ngCordovaOauth', 'ngStorage', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$ionicConfigProvider, $urlRouterProvider) {

  $ionicConfigProvider.tabs.position('bottom'); //bottom

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })


  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'loginController'
  })
  .state('monitor', {
    url: '/monitor',
    templateUrl: 'templates/monitor.html',
    controller:'GraphCtrl'
  })
  .state('monitor2', {
    url: '/monitor2',
    templateUrl: 'templates/monitor2.html',
    controller:'GraphCtrl'
  })
  .state('monitor3', {
    url: '/monitor3',
    templateUrl: 'templates/monitor3.html',
    controller:'GraphCtrl'
  })
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller:'forgotController'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller:'registerController'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/tabs.html',
    controller:'homeController'
  })

  .state('faucet', {
    url: '/faucet',
    templateUrl: 'templates/faucet.html',
    controller:'homeController'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})
.constant('FURL', 'https://event-master1.firebaseio.com/');
