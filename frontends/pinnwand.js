function PinnwandCtrl($scope, $http) {

  $http.get('https://eltern-dhg.cloudant.com/app/_design/eltern-dhg/_view/sprechstunden').success(function (data) {
    $scope.sprechstunden = data.rows;
  });

  $scope.neue_sprechstunde = function () {

    var sprechstunde = {
      "lehrer" :  $scope.lehrer,
      "termin" :  $scope.termin,
      "fach" : $scope.fach,
      "typ":   "sprechstunde"
    };

    $http.post('https://eltern-dhg.cloudant.com/app/', sprechstunde).success(function (data) {
      $http.get('https://eltern-dhg.cloudant.com/app/_design/eltern-dhg/_view/sprechstunden').success(function (data) {
        $scope.sprechstunden = data.rows;
        $scope.lehrer = "";
        $scope.termin = "";
        $scope.fach = "";
      });
    });

  }
};
