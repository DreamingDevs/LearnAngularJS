angular.module("AdminModule")
.constant("MenuItems", ["Orders", "Products"])
.controller("AdminController", function ($scope, MenuItems) {
    $scope.selectedMenuItem = 0;

    $scope.getMenuItems = function () {
        return MenuItems;
    }
    $scope.setSelectedMenuItem = function (menuItemIndex) {
        $scope.selectedMenuItem = menuItemIndex;
    }

    $scope.getScreen = function () {
        return $scope.selectedMenuItem == 0 ? "../Views/Partials/AdminOrders.html" : "../Views/Partials/AdminProducts.html";
    };

})