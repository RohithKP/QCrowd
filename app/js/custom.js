angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','ng-sortable','ngAnimate','chart.js','angularUtils.directives.uiBreadcrumbs','ngResource']).config(function ($stateProvider,$urlRouterProvider) {
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
    views:{
      '':{templateUrl: 'partials/home.html'},
      'mainView@dashboard':{
        templateUrl:'partials/dashboard.html',
        controller:'dashBoardCtrl'
      }
    },
    resolve: {
        projects: function(dataFactory){
            return dataFactory.projects.query();
          }
        },
    data:{
      displayName:'Home'
    }
  })
  .state('dashboard.projects', {
    url: '/projects',
    views:{
      'mainView@dashboard':{
        templateUrl:'partials/projects.html',
        controller:'projectCtrl',
        resolve: {
            treeData: function(dataFactory){
                return dataFactory.treeData.query();
              }
            }
          },
      'treeView@dashboard.projects':{
        templateUrl:'partials/tree.html',
        controller:'treeCtrl'
      },
      'detailView@dashboard.projects':{
        templateUrl:'partials/detailView.html',
        controller:'detailViewCtrl',
        resolve: {
              modHistory: function(dataFactory){
                  return dataFactory.modHistory.query();
                },
              tcHistory: function(dataFactory){
                  return dataFactory.tcHistory.query();
                }
            }
      },
      'tabView@dashboard.projects':{
        templateUrl:'partials/moduleHistory.html',
        controller:'moduleHistoryCntrl'
      }
    },
    data:{
      displayName:'Projects'
    }
  })
  .state('dashboard.projects.module', {
    url: '/module',
    views:{
    'tabView@dashboard.projects':{templateUrl:'partials/moduleHistory.html', controller:'moduleHistoryCntrl'},
  },
  data:{
    displayName:'Module'
  }
  })
  .state('dashboard.projects.testCase', {
    url: '/testCase',
    views:{
    'tabView@dashboard.projects':{templateUrl:'partials/moduleHistory.html', controller:'testCaseHistoryCntrl'},
  },
  data:{
    displayName:'Test Case'
  }
  })
  .state('dashboard.projects.module.statistics', {
    url: '/statistics/:key',
    views:{
      'tabView@dashboard.projects':{templateUrl:'partials/statistics.html', controller:'statisticsCntrl'},
    },
    data:{
      displayName:'Statistics'
    }
  })
  .state('dashboard.projects.addStep', {
    url: '/projects/addStep',
    views:{
      // 'treeView':{template:'partials/tree.html'},
      // 'addView':{template:'partials/detailView.html'},
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
