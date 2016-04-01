angular.module('QCrowd').controller('testCaseHistoryCntrl',['$scope','$state','helpers',function ($scope,$state,helpers) {
$scope.history = $scope.tcHistory;
$scope.resolver = {
     message: function (dataFactory) {
              return {
                tcResults:dataFactory.popupHisData.query()
              }
            }
}
$scope.modalOpen = helpers.modalOpen;
$scope.showStat=function (item) {
  $scope.modalOpen('tcHistoryItem.html','tcHistoryItemPopUpCntrl','xl',$scope.resolver);
};

}]);
