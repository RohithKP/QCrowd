
angular.module('QCrowd').factory('dataFactory',['$resource',function($resource) {
  return{
    modHistory: $resource('./assets/json/moduleHis.json', {}),
    projects : $resource('./assets/json/projects.json', {}),
    tcHistory : $resource('./assets/json/testHistory.json', {}),
    treeData : $resource('./assets/json/treeData.json', {}),
    popupHisData : $resource('./assets/json/tcPopupHistory.json', {})
  };
}]);
