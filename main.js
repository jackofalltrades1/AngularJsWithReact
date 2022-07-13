import angular from 'angular'
// import reactDirective from './src/angular/reactDirective'

const  app = angular.module('app', []);
app.controller('MessengerCtrl', function($scope) {
  $scope.msg = [
    {text:'Hi', done:false},
    {text:'Good morning', done:false}];

  $scope.sendMsg = function() {
    $scope.msg.push({text:$scope.msgText, done:false});
      $scope.msgText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.msg, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

    $scope.markMsgRead = function (msgText) {
        var index = $scope.msg.findIndex((item, index) => { return (item.text === msgText) })
    console.log(index)
    $scope.msg[index].done = !$scope.msg[index].done
    $scope.$apply()
  };

})


export default app;