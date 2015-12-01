angular.module("AdminModule")
.constant("ordersUrl", "http://proangularjslearnapi.azurewebsites.net/api/GetAllOrders")
.controller("ordersController", function ($scope, $http, ordersUrl) {
    $http.get(ordersUrl)
        .success(function (data) {
            console.log(data);
            $scope.orders = data;
        })
        .error(function (error) {
            $scope.error = error;
        });

    $scope.selectedOrder;

    $scope.selectOrder = function (order) {
        $scope.selectedOrder = order;
    };
    $scope.calcTotal = function (order) {
        var total = 0;
        for (var i = 0; i < order.Products.length; i++) {
            total += order.Products[i].Price;
        }
        return total;
    }
});