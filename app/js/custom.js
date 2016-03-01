angular.module('QCrowd',['ui.router']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'/partials/home.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })
  .state('login',{
    url:'/login',
    views:{
      '':{templateUrl:'/partials/login.html'},
      'columnOne@login':{template:'I am on column one'},
      'columnTwo@login':{template:'column2' },
    }
  })
  .state('login.child',{
    views:{
      'columnOne':{template:'from login.child'}
    }
  })
  // nested list with custom controller
  .state('home.list', {
    url: '/list',
    templateUrl: '/partials/home.list.html',

  })
  // nested list with just some random string data
  .state('home.paragraph', {
    url: '/paragraph',
    template: 'I could sure use a drink right now.'
  })


})


angular.module("QCrowd").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
    console.log(event);
  }
);
});
