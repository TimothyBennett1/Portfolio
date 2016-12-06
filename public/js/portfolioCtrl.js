angular.module('portfolioApp')
    .controller('portfolioCtrl', function($scope, $interval) {

        $scope.open = false;

        $scope.openNav = () => {
            document.getElementById('small-nav').style.width = "100%";
            $scope.open = true;
        }
        $scope.closeNav = () => {
            document.getElementById('small-nav').style.width = "0";
            $scope.open = false;
        }
    });
