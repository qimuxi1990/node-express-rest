// retrieve existing module
angular.module('test').controller('testController', function($scope, $http) {
  // define a variable for $http callbacks to access this controller.
  var _this = this;
  this.target = {
    path: 'collection',
    method: 'GET'
  };
  this.response = "";
  this.sendRequest = function() {
    switch (this.target.path) {
      case 'collection':
        $http({
          method: this.target.method,
          url: '/api/objects'
        }).then(function(res) {
          // the scope here is not the same as the controller, so using "this" will not access the controller
          // using "_this" variable instead
          _this.response = res.status + ' ' + res.statusText + ': ' + JSON.stringify(res.data);
        }, function(err) {
          _this.response = err.status + ' ' + err.statusText;
        });
        break;
      case 'object':
        $http({
          method: this.target.method,
          url: '/api/objects/objectId'
        }).then(function(res) {
          _this.response = res.status + ' ' + res.statusText + ': ' + JSON.stringify(res.data);
        }, function(err) {
          _this.response = err.status + ' ' + err.statusText;
        });
        break;
      default:
        break;
    }
  };
  this.sendRequest();
});