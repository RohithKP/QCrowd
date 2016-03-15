angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','ngSanitize']).config(function ($stateProvider,$urlRouterProvider) {
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
      'detailView@projects':{templateUrl:'partials/detailView.html'},
    }

  })
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
  })
  .state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller:"TabsDemoCtrl"
  })


})


angular.module("QCrowd").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
  }
);
});

angular.module("QCrowd").filter('projFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.name.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});

angular.module("QCrowd").filter('userFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.user.name.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});
angular.module("QCrowd").filter('statusFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.status.text.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});
angular.module("QCrowd").filter('browserFilter', function() {
  return function(items,array) {
    if(array!=undefined&&array[0]){
      var filtered = [];
      angular.forEach(items, function(item) {
        for (var i = 0; i < array.length; i++) {
          searchText = array[i].toLowerCase();
          for (var j = 0; j < item.browsers.length; j++) {
               if( item.browsers[j].name.toLowerCase().indexOf(searchText) >= 0 ) {
                 var index = filtered.indexOf(item);
                 if (index <= -1) {
                                   filtered.push(item);
                   }
               }
             }
        }
      });
      console.log( filtered);
      return filtered;
    }else{
      return items;
    }
  }
});
