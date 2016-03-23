angular.module("QCrowd").factory('helpers', function($uibModal) {
  return {
    toggleSelect: function (array,arg) {
      var index = array.indexOf(arg);
      if (index > -1) {
          array.splice(index, 1);
      }else{
        array.push(arg);
      }
    },
    empty : function (array) {
      return array[0]==undefined;
    },
    isItem :function (array,arg) {
      return array.indexOf(arg)>-1?true:false;
    },
    allSelected : function (array,items) {
      if(array[0]==undefined)return false;
      var bool =true;
      angular.forEach(items,function(item){
            if(this.isItem(array,item.id)==false)bool = false;
        }.bind(this))
      return bool;
    },
    selectAll :function (array,items) {
      if(!this.allSelected(array,items)){
        array = [];
        angular.forEach(items,function(item){
          array.push(item.id);
          console.log(array);
        })
      }else {
           array = [];
      }
      return array;
    },
    deleteItem : function (array,items) {
      var new_arr = array;
      angular.forEach(array,function (id) {
       pos = items.map(function(e) { return e.id; }).indexOf(id);
       if(pos>-1){
       items.splice(pos,1);
       }
       console.log(pos);
      });
        array = [];
    },
    total:function (array) {
      return array.reduce(function(a, b) {return a + b;});
    },
    modalOpen:function (template,size) {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: template,
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return [];
          }
        }
      });

      modalInstance.result.then(function (x) {
      }, function () {
      console.log('Modal dismissed at: ' + new Date());
      });
    }

  }
});
