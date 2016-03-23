angular.module('QCrowd').controller('testCaseHistoryCntrl',['$scope','$state','helpers',function ($scope,$state,helpers) {
$scope.history = [
  {
  "date" : "29-FEBRUARY-2016",
  "time" : "1:45 PM",
  "browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  },
  {
  "date" : "28-FEBRUARY-2016",
  "time" : "10:11 AM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  },
  {
  "date" : "27-FEBRUARY-2016",
  "time" : "2:30 PM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":0},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  },
  {
  "date" : "26-FEBRUARY-2016",
  "time" : "11:25 AM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":1},{"name":"safari","status":1}]
  },
  {
  "date" : "25-FEBRUARY-2016",
  "time" : "12:35 PM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":0},{"name":"safari","status":1}]
  },
  {
  "date" : "24-FEBRUARY-2016",
  "time" : "4:00 PM",
"browsers":[{"name":"opera","status":0},{"name":"opera","status":1},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  },
  {
  "date" : "23-FEBRUARY-2016",
  "time" : "1:30 PM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":1},{"name":"safari","status":1}]
  },
  {
  "date" : "22-FEBRUARY-2016",
  "time" : "9:45 AM",
"browsers":[{"name":"opera","status":0},{"name":"opera","status":0},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  },
  {
  "date" : "21-FEBRUARY-2016",
  "time" : "8:25 PM",
"browsers":[{"name":"opera","status":1},{"name":"opera","status":1},{"name":"firefox","status":-1},{"name":"safari","status":1}]
  }
]
$scope.message = "hey there";
$scope.modalOpen = helpers.modalOpen;
$scope.showStat=function (item) {
  $scope.modalOpen('tcHistoryItem.html','tcHistoryItemPopUpCntrl','xl');
}
}]);
