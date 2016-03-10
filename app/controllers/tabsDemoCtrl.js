angular.module('QCrowd').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.projects =  [{"id":0,"name":"Marius Lorem","status":{"text":"passed","percent":45},"browsers":[{"name":"firefox","status":1},{"name":"chrome","status":0},{"name":"safari","status":-1},{"name":"opera","status":1}],"user":{"id":1,"imgUrl":"assets/images/users/one.jpg","name":"Alex Paul"}},
                      {"id":1,"name":"Dk Marius Lorem","status":{"text":"passed","percent":75},"browsers":[{"name":"firefox","status":1},{"name":"chrome","status":1},{"name":"safari","status":0},{"name":"opera","status":1}],"user":{"id":2,"imgUrl":"assets/images/users/two.jpg","name":"Maria Ann"}},
                    {"id":2,"name":"Dk Marius Lorem","status":{"text":"failed","percent":75},"browsers":[{"name":"firefox","status":-1},{"name":"chrome","status":0},{"name":"safari","status":0},{"name":"opera","status":0}],"user":{"id":3,"imgUrl":"assets/images/users/two.jpg","name":"Julie Ann"}},
                  {"id":3,"name":"Dk Marius Lorem","status":{"text":"passed","percent":100},"browsers":[{"name":"firefox","status":-1},{"name":"chrome","status":1},{"name":"safari","status":1},{"name":"opera","status":1}],"user":{"id":4,"imgUrl":"assets/images/users/two.jpg","name":"Akshaya"}}];
  $scope.tabs = [
    { title:'TASK UNDER PROGRESS', content:'' },
    { title:'COMPLETED TASK', content:'Dynamic content 2'},
    { title:'PROJECTS', content:'Dynamic content 3' }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
  $scope.query = {projectQuery:'',userQuery:'',statusQuery:'',browserQuery:''};
  $scope.model = {
    name: 'Tabs'
  };
});
