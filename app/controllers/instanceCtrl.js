
angular.module('QCrowd').controller('addInstanceCtrl', function ($scope, $uibModalInstance) {

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

angular.module('QCrowd').controller('rqstInstanceCtrl', function ($scope, $uibModalInstance,helpers,message) {
  $scope.helpers=helpers;
  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.browsers = message.browsers;
  $scope.brarray = message.brarray;
});

angular.module('QCrowd').controller('tcHistoryItemPopUpCntrl', function ($scope, $uibModalInstance,message) {
$scope.tcResults = message.tcResults;
});
