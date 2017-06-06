// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.txtName = "";
  $scope.txtSnippet = "";
  $scope.txtUrl = "";
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.',
      url: 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg'
    },
    {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.',
      url: 'https://cdn.pixabay.com/photo/2017/03/14/17/43/mountain-2143877_960_720.jpg'
    },
    {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.',
      url: 'https://static.pexels.com/photos/26822/pexels-photo.jpg'
    }
  ];
  $scope.addPhone = function() {
    // Add to phones
    $scope.phones.push({
      name: $scope.txtName,
      snippet: $scope.txtSnippet,
      url: $scope.txtUrl
      });

    // Clear txtName and txtSnippet
    $scope.resetTxtField();
  };
  $scope.resetTxtField = function() {
    $scope.txtName = "";
    $scope.txtSnippet = "";
    $scope.txtUrl = "";
  };

  $scope.delPhone = function(index) {
    $scope.phones.splice(index, 1);
  };
});
