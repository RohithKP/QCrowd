angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','ng-sortable','ngAnimate','chart.js']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'partials/home.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })
  .state('home.list', {
    url: '/list',
    templateUrl: 'partials/home.list.html',
  })
  .state('views',{
    url:'/views',
    views:{
      '':{templateUrl:'partials/views.html'},
      'columnOne@views':{template:'I am on column one'},
      'columnTwo@views':{template:'column2' },
    }
  })
  .state('views.child',{
    views:{
      'columnOne':{template:'from views.child'}
    }
  })
  .state('home.paragraph', {
    url: '/paragraph',
    template: 'I could sure use a drink right now.'
  })
  .state('projects', {
    url: '/projects',
    views:{
      '':{templateUrl: 'partials/projects.html',    controller:'treeController'},
      'treeView@projects':{templateUrl:'partials/tree.html'},
      'detailView@projects':{templateUrl:'partials/detailView.html', controller:'detailViewCtrl'},
      'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
    }
  })
  .state('projects.module', {
    url: '/module/',
    views:{
    'tabView':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
    }
  })
  .state('projects.testCase', {
    url: '/testCase/',
    views:{
    'tabView':{templateUrl:'partials/testCaseHistory.html', controller:'testCaseHistoryCntrl'},
    }
  })
  .state('projects.statistics', {
    url: '/statistics/:key',
    views:{
      'tabView':{templateUrl:'partials/statistics.html', controller:'statisticsCntrl'},
    }
  })
  .state('projects.addStep', {
    url: '/projects/addStep',
    views:{
      'treeView':{template:'partials/tree.html'},
      'addView':{template:'partials/detailView.html'},
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'validationCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller:'validationCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller:"dashBoardCtrl"
  })
});

angular.module("QCrowd").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
  }
);
});
