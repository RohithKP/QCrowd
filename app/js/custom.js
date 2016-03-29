angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','angularUtils.directives.uiBreadcrumbs','ng-sortable','ngAnimate','chart.js']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'validationCtrl',
    data: {
        displayName: 'login',
      }
  })
  .state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller:'validationCtrl',
    data: {
        displayName: 'register',
      }
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller:"dashBoardCtrl",
    data: {
        displayName: 'dashboard',
      }
  })
  .state('projects', {
    url: '/projects',
    views:{
      '':{templateUrl: 'partials/projects.html',    controller:'projectCtrl'},
      'treeView@projects':{templateUrl:'partials/tree.html', controller:'treeCtrl'},
      'detailView@projects':{templateUrl:'partials/detailView.html', controller:'detailViewCtrl'},
      'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
    },
    data: {
        displayName: 'projects',
      }
  })
  .state('projects.module', {
    url: '/module',
    views:{
    'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
  },
  data: {
      displayName: 'module',
    }
  })
  .state('projects.testCase', {
    url: '/testCase',
    views:{
    'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'testCaseHistoryCntrl'},
  },
  data: {
      displayName: 'testcase',
    }
  })
  .state('projects.module.statistics', {
    url: '/statistics/:key',
    views:{
      'tabView@projects':{templateUrl:'partials/statistics.html', controller:'statisticsCntrl'},
    },
    data: {
        displayName: 'statistics',
      }
  })
  .state('projects.addStep', {
    url: '/projects/addStep',
    views:{
      'treeView':{template:'partials/tree.html'},
      'addView':{template:'partials/detailView.html'},
    }
  })

});

angular.module("QCrowd").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
  }
);
});
