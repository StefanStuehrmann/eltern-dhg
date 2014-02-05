function PinnwandCtrl($scope, $http) {

  $http.get('./_view/sprechstunden').success(function (data) {
    $scope.sprechstunden = data.rows;
  });

  $scope.neue_sprechstunde = function () {

    var sprechstunde = {
      "lehrer" :  $scope.lehrer,
      "termin" :  $scope.termin,
      "fach" : $scope.fach,
      "typ":   "sprechstunde"
    };

    $http.post('/api/', sprechstunde).success(function (data) {
      $http.get('./_view/sprechstunden').success(function (data) {
        $scope.sprechstunden = data.rows;
        $scope.lehrer = "";
        $scope.termin = "";
        $scope.fach = "";
      });
    });

  }
};
