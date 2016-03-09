angular.module('QCrowd').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.projects =  [{"id":0,"name":"Marius Lorem","status":"passed","browsers":["opera"],"user":"Alex Paul"},
                      {"id":1,"name":"Dk Marius Lorem","status":"passed","browsers":["opera","mozilla"],"user":"Maria Ann"}];
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

  $scope.model = {
    name: 'Tabs'
  };
});
