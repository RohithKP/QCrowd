
angular.module('QCrowd').controller('dashBoardCtrl',['$scope','helpers','$window','$document','$log','projectData',function ($scope,helpers,$window,$document,$log,projectData) {
  $scope.projects = projectData;
  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
  $scope.query = {projectQuery:'',userQuery:'',statusQuery:'',browserQuery:''};

  $scope.filterStatus = function($event,txt){
    $event.stopPropagation();
    $scope.query.statusQuery =txt;
  }
  $scope.query.browsers = ['firefox','chrome','safari','opera'];

  $scope.platforms = {
   options: [
     'platform',
     'windows 10',
     'windows 8',
     'iOS 8',
     'ubuntu'
   ],
   selected: 'platform'
 };
  $scope.model = {
    name: 'Tabs'
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
