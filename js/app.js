// function MyController($scope, $timeout) {
//     $scope.clock = {
//         now: new Date()
//     };
//     var updateClock = function() {
//         $scope.clock.now = new Date();
//         $timeout(function() {
//             updateClock();
//         }, 1000);
//     };
//     updateClock();
// };

// function MyController($scope) {
//     $scope.scope = $scope;
//     $scope.clock = {
//         now: new Date()
//     };

//     var updateClock = function() {
//         $scope.clock.now = new Date()
//     };
//     setInterval(function() {
//         $scope.$apply(updateClock);
//     }, 1000);
// };

angular.module('myApp', [])
    .controller('MyController', function($scope, $parse, $interpolate) {
        $scope.today = new Date();
        $scope.$watch('expr', function(newVal, oldVal, scope) {
            if (newVal !== oldVal) {
                var parseFun = $parse(newVal);

                $scope.parseValue = parseFun(scope);
            }
        });
    // })
    // .controller('MyController', function($scope, $interpolate) {
        $scope.$watch('emailBody', function(body) {
            if (body) {
                var template = $interpolate(body);
                $scope.previewText = template({to: $scope.to});
            }
        });
    })
;