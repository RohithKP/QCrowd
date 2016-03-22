angular.module('QCrowd',['ui.router','treeControl','ui.bootstrap','ng-sortable','ngAnimate']).config(function ($stateProvider,$urlRouterProvider) {
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
// commonfunctions
var MyNamespace = MyNamespace || {};

 MyNamespace.helpers = {
   toggleSelect: function (array,arg) {
     var index = array.indexOf(arg);
     if (index > -1) {
         array.splice(index, 1);
     }else{
       array.push(arg);
     }
   },
   empty : function (array) {
     return array[0]==undefined;
   },
   isItem :function (array,arg) {
     return array.indexOf(arg)>-1?true:false;
   },
   allSelected : function (array,items) {
     if(array[0]==undefined)return false;
     var bool =true;
     angular.forEach(items,function(item){
           if(this.isItem(array,item.id)==false)bool = false;
       }.bind(this))
     return bool;
   },
   selectAll :function (array,items) {
     if(!this.allSelected(array,items)){
       array = [];
       angular.forEach(items,function(item){
         array.push(item.id);
         console.log(array);
       })
     }else {
          array = [];
     }
     return array;
   },deleteItem : function (array,items) {
     var new_arr = array;
     angular.forEach(array,function (id) {
      pos = items.map(function(e) { return e.id; }).indexOf(id);
      if(pos>-1){
      items.splice(pos,1);
      }
      console.log(pos);
     });
       array = [];
   }

 };
