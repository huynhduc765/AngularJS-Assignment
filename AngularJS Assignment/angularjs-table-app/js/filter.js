(function() {
  var appFilter = angular.module('table_filter',[])
  // .filter("asDate",function(){
  //   return function(input){
  //     return new Date(input);
  //   }
  // });
  appFilter.filter('telephone', function(){
    return function(item){
      return "(+84)" +item.substring(0,3) + item.substring(4,7) + item.substring(8);
    }
    
});})();
