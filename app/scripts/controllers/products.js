'use strict';

var prodController = angular.module('tdfEvaluationApp')
	
	prodController.controller('ProdLstCtrl', function($scope, Products) {
		$scope.products = {}
    $scope.products = Products.getproducts();
    $scope.limit = {}
    $scope.view = {}
    $scope.limit = 0
    $scope.grid_src_path = "images/grid-blue.png"
    $scope.list_src_path = "images/list-grey.png"
    $scope.view_status = "grid"

    $scope.clickGrid = function(){
      $scope.list_src_path = {}
      $scope.grid_src_path = {}
      $scope.view_status = {}
      $scope.grid_src_path = "images/grid-blue.png"
      $scope.list_src_path = "images/list-grey.png"
      $scope.view_status = "grid"
    };

    $scope.clickList = function(){
      $scope.list_src_path = {}
      $scope.grid_src_path = {}
      $scope.view_status = {}

      $scope.list_src_path = "images/list.png"
      $scope.grid_src_path = "images/grid.png"
      $scope.view_status = "list"
    };

    $scope.leftClicked = function(){
      $scope.limit = {}
      $scope.limit = 0
    };

    $scope.rightClicked = function(){
      $scope.limit = {}
      $scope.limit = 4
    };
	});

