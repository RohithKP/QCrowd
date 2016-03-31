angular.module('QCrowd').factory('dataFactory',['$resource', '$q', '$http', function($resource, $q, $http) {
  return{
    history: $resource('./assets/json/history.json', {}),
    projects : $resource('./assets/json/projects.json', {}),
    tcHistory : $resource('./assets/json/tcHistory.json', {}),
    treeData : $resource('./assets/json/treeData.json', {}),
    popupHisData : $resource('./assets/json/tcpopupHistory.json', {}),

    myData: function () {
      var url = './assets/json/treeData.json',
          deferred = $q.defer();

          $http.get(url).then(function (data) {
            deferred.resolve(data);
          }, function () {
            deferred.reject(data);
          })

          return deferred.promise;
    }
  };
}]);
