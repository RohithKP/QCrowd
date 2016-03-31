angular.module('QCrowd').factory('dataFactory',['$resource',function($resource) {
  return{
    history: $resource('./assets/json/history.json', {}),
    projects : $resource('./assets/json/projects.json', {}),
    tcHistory : $resource('./assets/json/tcHistory.json', {}),
    treeData : $resource('./assets/json/treeData.json', {}),
    popupHisData : $resource('./assets/json/tcpopupHistory.json', {})

  };

}]);
