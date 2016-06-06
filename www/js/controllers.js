angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    $scope.images = [
        {thumb: 'http://demo.jankuri.com/ngGallery/images/thumbs/1.jpg', img: 'http://demo.jankuri.com/ngGallery/images/1.jpg', description: 'Image 1'},
        {thumb: 'http://demo.jankuri.com/ngGallery/images/thumbs/2.jpg', img: 'http://demo.jankuri.com/ngGallery/images/2.jpg', description: 'Image 2'},
        {thumb: 'http://demo.jankuri.com/ngGallery/images/thumbs/3.jpg', img: 'http://demo.jankuri.com/ngGallery/images/3.jpg', description: 'Image 3'},
        {thumb: 'http://demo.jankuri.com/ngGallery/images/thumbs/3.jpg', img: 'http://demo.jankuri.com/ngGallery/images/4.jpg', description: 'Image 4'}
    ];

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
