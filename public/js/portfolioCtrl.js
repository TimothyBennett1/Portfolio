angular.module('portfolioApp')
    .controller('portfolioCtrl', function($scope, $interval, $state, $rootScope) {

        $scope.open = false;
        
        $scope.openNav = () => {
            document.getElementById('small-nav').style.display = "flex";
            $scope.open = true;
        }
        $scope.closeNav = () => {
            document.getElementById('small-nav').style.display = "none";
            $scope.open = false;
        }

        $scope.name = $state.current.name;

        $rootScope.$on('$stateChangeSuccess',function() {
          return $scope.name = $state.current.name;

          $scope.scrollPos = 0;
        });
    });
