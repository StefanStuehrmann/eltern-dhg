function SchuelerCtrl($scope, $http) {

  $http.get('./_view/schueler').success(function (data) {
    $scope.adressen = data.rows;
  });

  $scope.speichere_schueler = function () {

    var adresse = {
      "schuelername" :  $scope.schuelername,
      "elternname" :    $scope.elternname,
      "adresse" :       $scope.adresse,
      "telefonnummer" : $scope.telefonnummer,
      "email" :         $scope.email,
      "typ":            "schueler"
    };

    $http.post('/api/', adresse).success(function (data) {
      $http.get('./_view/schueler').success(function (data) {
        $scope.adressen = data.rows;
      });
    });
    $scope.falsche_email = false;
    $scope.schuelername = "";
    $scope.elternname = "";
    $scope.adresse = "";
    $scope.telefonnummer = "";
    $scope.email = "";

  }

  $scope.loesche_schueler = function (id, rev) {
    $http.delete('/api/'+id+'?rev='+rev).success(function (data) {
      $http.get('./_view/schueler').success(function (data) {
        $scope.adressen = data.rows;
      });
    });
  }
};