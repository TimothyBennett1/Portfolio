angular.module('portfolioApp')
  .controller('portfolioCtrl', function($scope) {

    $scope.open = false;

    $scope.openNav = () => {
      document.getElementById('small-nav').style.display = "flex";
      $scope.open = true;
    }
    $scope.closeNav = () => {
      document.getElementById('small-nav').style.display = "none";
      $scope.open = false;
    }
  });
