
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
angular.module('QCrowd').controller('rqstInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.browsers = ["chrome","firefox","internet-explorer","safari","opera"];
});
