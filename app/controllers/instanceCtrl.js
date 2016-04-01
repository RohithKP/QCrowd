
angular.module('QCrowd').controller('addInstanceCtrl',['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {

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
}]);

angular.module('QCrowd').controller('rqstInstanceCtrl',['$scope','$uibModalInstance','helpers','message',function ($scope, $uibModalInstance,helpers,message) {
  $scope.helpers=helpers;
  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.browsers = message.browsers;
  $scope.platformOptions = message.platformOptions;
  $scope.brarray = message.brarray;
}]);

angular.module('QCrowd').controller('tcHistoryItemPopUpCntrl',['$scope','$uibModalInstance','helpers','message',function ($scope, $uibModalInstance,helpers,message) {
  $scope.tcResults = message.tcResults;

  $scope.showImg=function (url) {
    resolver = {
       message: function () {
                return {
                  imgUrl:url
                }
      }
    }
    helpers.modalOpen('tcHistoryImg.html','tcHistoryImgPopUpCntrl','xl',resolver);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

angular.module('QCrowd').controller('tcHistoryImgPopUpCntrl',['$scope','$uibModalInstance','message',function ($scope, $uibModalInstance,message) {
  $scope.url = message.imgUrl;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
