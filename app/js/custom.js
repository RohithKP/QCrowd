angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','ng-sortable','ngAnimate','chart.js','ngResource']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
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
    controller:"dashBoardCtrl",
    resolve: {
          projectData: function(dataFactory){
              return dataFactory.projects.query();
      }}
  })
  .state('projects', {
    url: '/projects',
    views:{
      '': {
        templateUrl: 'partials/projects.html',
        controller: 'projectCtrl',
        resolve: {
            treeData: function(dataFactory){
                return dataFactory.treeData.query();
              }
            }
      },
      'treeView@projects': {
        templateUrl:'partials/tree.html',
        controller:'treeCtrl'
      },
      'detailView@projects': {
        templateUrl:'partials/detailView.html',
        controller:'detailViewCtrl'
      },
      'tabView@projects': {
        templateUrl: 'partials/moduleHistory.html',
        controller:'moduleHistoryCntrl'
      },
    }
  })
  .state('projects.module', {
    url: '/module',
    views:{
    'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
  }
  })
  .state('projects.testCase', {
    url: '/testCase',
    views:{
    'tabView@projects':{templateUrl:'partials/moduleHistory.html', controller:'testCaseHistoryCntrl'},
  }
  })
  .state('projects.module.statistics', {
    url: '/statistics/:key',
    views:{
      'tabView@projects':{templateUrl:'partials/statistics.html', controller:'statisticsCntrl'},
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
