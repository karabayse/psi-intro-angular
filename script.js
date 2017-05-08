console.log('test');

var myApp = angular.module('myApp', []);

myApp.controller('ourFirstController', function() {

  // view model
  var vm = this;

  vm.thingOne = 'HEY CLASS!'
  vm.thingTwo = 'Here is another thing';

  vm.name = '';

});
