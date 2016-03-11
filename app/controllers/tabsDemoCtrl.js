angular.module('QCrowd').controller('TabsDemoCtrl', function ($scope, $window,$document) {
  $scope.projects =  [{"id":0,"name":"Marius Lorem","status":{"text":"passed","percent":45},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform":"apple","name":"chrome","status":0},{"platform":"windows","name":"safari","staappleus":-1},{"platform":"apple","name":"opera","status":1}],"user":{"id":1,"imgUrl":"assets/images/users/one.jpg","name":"Alex Paul"}},
                      {"id":1,"name":"Dk Marius Lorem","status":{"text":"passed","percent":75},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform":"windows","name":"chrome","status":1},{"platform":"apple","name":"safari","status":0},{"platform":"windows","name":"opera","status":1}],"user":{"id":2,"imgUrl":"assets/images/users/two.jpg","name":"Maria Ann"}},
                    {"id":2,"name":"Dk sure rem","status":{"text":"failed","percent":75},"browsers":[{"platform":"windows","name":"firefox","status":-1},{"platform":"windows","name":"chrome","status":0},{"platform":"windows","name":"safari","status":0},{"platform":"apple","name":"opera","status":0}],"user":{"id":3,"imgUrl":"assets/images/users/two.jpg","name":"Julie Ann"}},
                  {"id":3,"name":"savi main","status":{"text":"passed","percent":100},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform":"apple","name":"chrome","status":1},{"platform":"windows","name":"safari","status":0},{"platform":"windows","name":"opera","status":1}],"user":{"id":4,"imgUrl":"assets/images/users/two.jpg","name":"Akshaya"}},
                {"id":4,"name":"savi main","status":{"text":"passed","percent":100},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform":"windows","name":"chrome","status":-1},{"platform":"apple","name":"safari","status":1},{"platform":"apple","name":"opera","status":1}],"user":{"id":5,"imgUrl":"assets/images/users/two.jpg","name":"Akshaya"}}];
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

  // $scope.select=function functionName($event) {
  //   var alllis = angular.element($event.currentTarget).find('li');
  //   angular.forEach(alllis, function(elem) {
  //    angular.element(elem).removeClass('selected');
  //   });
  //   angular.element($event.target).addClass('selected');
  // };
  $scope.filterStatus = function($event,txt){
    $event.stopPropagation();
    $scope.query.statusQuery =txt;
  }

  $scope.model = {
    name: 'Tabs'
  };
});
