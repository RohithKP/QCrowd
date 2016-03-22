
angular.module("QCrowd").filter('projFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.name.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});

angular.module("QCrowd").filter('userFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.user.name.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});
angular.module("QCrowd").filter('statusFilter', function() {
  return function(items,searchText) {
    if(searchText!=undefined&&searchText!=''){
      var filtered = [];
      searchText = searchText.toLowerCase();
      angular.forEach(items, function(item) {
        if( item.status.text.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    }else{
      return items;
    }
  }
});
angular.module("QCrowd").filter('browserFilter', function() {
  return function(items,array) {
    if(array!=undefined&&array[0]){
      var filtered = [];
      angular.forEach(items, function(item) {
        for (var i = 0; i < array.length; i++) {
          searchText = array[i].toLowerCase();
          for (var j = 0; j < item.browsers.length; j++) {
               if( item.browsers[j].name.toLowerCase().indexOf(searchText) >= 0 ) {
                 var index = filtered.indexOf(item);
                 if (index <= -1) {
                                   filtered.push(item);
                   }
               }
             }
        }
      });
      console.log( filtered);
      return filtered;
    }else{
      return items;
    }
  }
});
