app.controller('uiCtrl', function($scope){

  $scope.getMeterArray = function (number) {
    if (number > 0) {
      return new Array(number);
    }
    return [];
  }

  $scope.costRemaining = function () {
    return 8;
  }

  $scope.invest = function (amount) {
    $scope.currentInvestment += amount;
    $scope.investmentPoints -= amount;
    console.log("Invest: " + amount);
  }

});