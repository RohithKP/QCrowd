angular.module('QCrowd').controller('TabsDemoCtrl', function ($scope, $window,$document,$uibModal, $log) {
  $scope.projects =  [{"id":0,"name":"Marius Lorem","status":{"text":"Passed","percent":45},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"chrome","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"opera","status":1}],"user":{"id":1,"imgUrl":"assets/images/users/one.jpg","name":"Alex Paul"}},
                      {"id":1,"name":"Dk Marius Lorem","status":{"text":"Failed","percent":75},"browsers":[{"platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"opera","status":1}],"user":{"id":2,"imgUrl":"assets/images/users/two.jpg","name":"Maria Ann"}},
                    {"id":2,"name":"Dk sure rem","status":{"text":"Failed","percent":75},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"opera","status":0}],"user":{"id":3,"imgUrl":"assets/images/users/two.jpg","name":"Julie Ann"}},
                  {"id":3,"name":"savi main","status":{"text":"Passed","percent":100},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"chrome","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"safari","status":0},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"opera","status":1}],"user":{"id":4,"imgUrl":"assets/images/users/two.jpg","name":"Akshaya"}},
                {"id":4,"name":"savi main","status":{"text":"Passed","percent":100},"browsers":[{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"firefox","status":1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"windows","name":"chrome","status":-1},{"platform-ver":"10","browser-ver":"V 40.1","platform":"apple","name":"safari","status":1}],"user":{"id":5,"imgUrl":"assets/images/users/two.jpg","name":"Dan"}}];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
  $scope.query = {projectQuery:'',userQuery:'',statusQuery:'',browserQuery:''};

  // $scope.select=function functionName($event) {
  //   var alllis = angular.element($event.currentTarget).find('li');
  //   angular.forEach(alllis, function(elem) {
  //    angular.element(elem).removeClass('selected');
  //   });
  //   angular.element($event.target).addClass('selected');
  // };
  $scope.filterStatus = function($event,txt){
    $event.stopPropagation();
    $scope.query.statusQuery =txt;
  }
  $scope.query.browsers = ['firefox','chrome','safari','opera'];
  $scope.platforms = ['windows 10','windows 8','iOS 8','ubuntu'];
  $scope.model = {
    name: 'Tabs'
  };
  $scope.brarray = [];
  $scope.toggleSelect = function (arr,browser) {
    var index = arr.indexOf(browser);
    if (index > -1) {
        arr.splice(index, 1);
    }else{
      arr.push(browser);
    }
  }

   $scope.open = function (size) {

     var modalInstance = $uibModal.open({
       animation: true,
       templateUrl: 'myModalContent.html',
       controller: 'ModalInstanceCtrl',
       size: size,
       resolve: {
         items: function () {
           return [];
         }
       }
     });

     modalInstance.result.then(function (x) {
        console.log(x);
     }, function () {
       $log.info('Modal dismissed at: ' + new Date());
     });
   };

  $scope.projectsSelected = [];

  $scope.anySelected = function () {
    return $scope.projectsSelected[0]==undefined;
  }
  $scope.allSelected = function (items) {
    if($scope.projectsSelected[0]==undefined)return false;
    var bool =true;
    angular.forEach(items,function(item){
          if($scope.isSelected(item.id)==false)bool = false;
      })
    return bool;
  }
  $scope.isSelected =function (id) {
    return $scope.projectsSelected.indexOf(id)>-1?true:false;
  }
 $scope.selectAll = function (items) {
   if(!$scope.allSelected(items)){
     $scope.projectsSelected = [];
     angular.forEach(items,function(item){
       $scope.projectsSelected.push(item.id);
     })
   }else {
        $scope.projectsSelected = [];
   }
 }
 $scope.deleteItem = function () {
   var new_arr = $scope.projectsSelected;
   angular.forEach($scope.projectsSelected,function (id) {
    console.log($scope.projects.map(function(e) { return e.id; }));
    pos = $scope.projects.map(function(e) { return e.id; }).indexOf(id);
    if(pos>-1){
    $scope.projects.splice(pos,1);
    }
    console.log(pos);
   });
     $scope.projectsSelected = [];
 }



});




// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('QCrowd').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

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
