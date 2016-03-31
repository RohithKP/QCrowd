angular.module('QCrowd').controller('testCaseHistoryCntrl',['$scope','$state','helpers','dataFactory',function ($scope,$state,helpers,dataFactory) {
$scope.history = dataFactory.tcHistory.query();
console.log(dataFactory.popupHisData.query());
resolver = {
     message: function () {
              return {
                 tcResults:dataFactory.popupHisData.query()
              }
            }
}
$scope.showStat=function (item) {
   helpers.modalOpen('tcHistoryItem.html','tcHistoryItemPopUpCntrl','xl',resolver);
};

}]);
