angular.module('QCrowd').controller('historyCntrl',['$scope','$state',function ($scope,$state) {
$scope.history = [
  {
  "date" : "29-FEBRUARY-2016",
  "time" : "1:45 PM"
  },
  {
  "date" : "28-FEBRUARY-2016",
  "time" : "10:11 AM"
  },
  {
  "date" : "27-FEBRUARY-2016",
  "time" : "2:30 PM"
  },
  {
  "date" : "26-FEBRUARY-2016",
  "time" : "11:25 AM"
  },
  {
  "date" : "25-FEBRUARY-2016",
  "time" : "12:35 PM"
  },
  {
  "date" : "24-FEBRUARY-2016",
  "time" : "4:00 PM"
  },
  {
  "date" : "23-FEBRUARY-2016",
  "time" : "1:30 PM"
  },
  {
  "date" : "22-FEBRUARY-2016",
  "time" : "9:45 AM"
  },
  {
  "date" : "21-FEBRUARY-2016",
  "time" : "8:25 PM"
  }
]

$scope.showStat=function (item) {
   $state.go('projects.statistics',{"key":item.date+item.time});
}
}]);
