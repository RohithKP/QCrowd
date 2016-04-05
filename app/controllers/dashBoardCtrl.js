
angular.module('QCrowd').controller('dashBoardCtrl',['$scope','helpers','$window','$document','$log','projects',function($scope,helpers,$window,$document,$log,projects) {
  projects.$promise.then(
    function (data) {
      $scope.projects =  data;
    },function () {}
  );

  $scope.query = {projectQuery:'',userQuery:'',statusQuery:'',browserQuery:''};

  $scope.filterStatus = function($event,txt){
    $event.stopPropagation();
    $scope.query.statusQuery =txt;
  }
  $scope.query.browsers = ['firefox','chrome','safari','opera'];

  $scope.platforms = {
   options: ['platform','windows 10','windows 8','iOS 8','ubuntu'],
   selected: 'platform'
  };

  $scope.brarray = [];
  $scope.helpers = helpers;
  $scope.projectsSelected = [];
  $scope.viewby = {
    options: [
      10,
      25,
      50,
      100
    ],
    selected: 10
  };
   $scope.currentPage = 1;
}]);
