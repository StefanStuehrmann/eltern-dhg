function BilderCtrl($scope, $http) {
  $scope.pictures = Array();
  $scope.aktives_ereignis = "marquartstein";

  $http.get('https://eltern-dhg.cloudant.com/app/_design/eltern-dhg/_view/ereignisse').success(function (data) {
    $scope.ereignisse = data.rows;

    for(i=1;i<=$scope.ereignisse[0].value.fotoanzahl;i++) {
      j = (Array(3).join("0") + i).slice(-3);
      $scope.pictures.push({
         "slide" : "http://stefan.byscnet.de/bilder/"+$scope.ereignisse[0].value.name+"/slides/bild_"+ j+".jpg",
         "thump": "http://stefan.byscnet.de/bilder/"+$scope.ereignisse[0].value.name+"/thumbs/bild_"+ j+".jpg"
        });
    }
  });

  $scope.aendere_ereignis = function (ereignis) {
    $scope.aktives_ereignis = ereignis;
    console.log($scope.aktives_ereignis);
  }
}

