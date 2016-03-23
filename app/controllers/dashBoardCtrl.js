
angular.module('QCrowd').controller('dashBoardCtrl', function ($scope,helpers,$window,$document,$uibModal, $log) {
  $scope.projects =  [{"id":0,"name":"Marius Lorem","status":{"text":"Passed","percent":45},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"chrome","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"opera","status":1}],"user":{"id":1,"imgUrl":"assets/images/users/one.jpg","name":"Elizabeth"}},
                      {"id":1,"name":"Dk Marius Lorem","status":{"text":"Failed","percent":75},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"opera","status":1}],"user":{"id":2,"imgUrl":"assets/images/users/two.jpg","name":"Maria Ann"}},
                    {"id":2,"name":"Dk sure rem","status":{"text":"Failed","percent":75},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"opera","status":0}],"user":{"id":3,"imgUrl":"assets/images/users/two.jpg","name":"Julie Ann"}},
                  {"id":3,"name":"savi main","status":{"text":"Passed","percent":100},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"chrome","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"opera","status":1}],"user":{"id":4,"imgUrl":"assets/images/users/two.jpg","name":"Akshaya"}},
                {"id":4,"name":"savi main","status":{"text":"Passed","percent":100},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"safari","status":1}],"user":{"id":5,"imgUrl":"assets/images/users/two.jpg","name":"Dan"}}];

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
  $scope.platforms = ['windows 10','windows 8','iOS 8','ubuntu'];
  $scope.model = {
    name: 'Tabs'
  };
  $scope.brarray = [];
  $scope.helpers = helpers;

   $scope.open = function (size) {

     var modalInstance = $uibModal.open({
       animation: true,
       templateUrl: 'myModalContent.html',
       controller: 'ModalInstanceCtrl',
       size: size,
       resolve: {
         items: function () {
           return [];
         }
       }
     });

     modalInstance.result.then(function (x) {
     }, function () {
       $log.info('Modal dismissed at: ' + new Date());
     });
   };

  $scope.projectsSelected = [];

});




angular.module('QCrowd').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.deleteNod =function (e) {
     elem = e.target.parentNode.parentNode;
     elem.parentNode.removeChild(elem);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
