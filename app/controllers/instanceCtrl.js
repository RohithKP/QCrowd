
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
  $scope.platformOptions = message.platformOptions;
  $scope.brarray = message.brarray;
});

angular.module('QCrowd').controller('tcHistoryItemPopUpCntrl', function ($scope, $uibModalInstance,helpers,message) {
  $scope.tcResults = message.tcResults;
  $scope.resolver = {
     message: function () {
              return {
                 tcResults:[{"name":"Rohith","imgUrl":"assets/images/users/two.jpg","QA":[{"qid":"1","screenShotUrl":"assets/images/snapshot1.png","Result":"Passed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"},{"qid":"1","screenShotUrl":"assets/images/snapshot1.png","Result":"Passed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"}]},
                  {"name":"Emma","imgUrl":"assets/images/users/one.jpg","QA":[{"qid":"1","screenShotUrl":"assets/images/snapshot1.png","Result":"Passed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"},{"qid":"2","screenShotUrl":"assets/images/snapshot1.png","Result":"Passed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"}]},
                  {"name":"Rocky","imgUrl":"assets/images/users/two.jpg","QA":[{"qid":"1","screenShotUrl":"assets/images/snapshot1.png","Result":"Failed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"},{"qid":"3","screenShotUrl":"assets/images/snapshot1.png","Result":"Passed","DateTime":"2:45pm (29 Feb 2016)","QA Comment":"then asdlkalw sjdnbsjd   sjdnkss"}]},
                ]
              }
    }
  }
  $scope.showImg=function (item) {
    helpers.modalOpen('tcHistoryImg.html','tcHistoryImgPopUpCntrl','xl',$scope.resolver);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

angular.module('QCrowd').controller('tcHistoryImgPopUpCntrl', function ($scope, $uibModalInstance,message) {
  $scope.tcResults = message.tcResults;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
