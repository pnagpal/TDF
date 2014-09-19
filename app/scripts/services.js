'use strict';

/* Services */

var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Products', ['$resource',
  function($resource){
   return {
      getproducts: function() {
        return  [{"id": "1","heading": "Product title1","description": "Product description1","availability": "In stock","price": "$599.08"},
                 {"id": "2","heading": "Product title2","description": "Product description2","availability": "In stock","price": "$499.08"},
                 {"id": "3","heading": "Product title3","description": "Product description3","availability": "In stock","price": "$699.08"},
                 {"id": "4","heading": "Product title4","description": "Product description4","availability": "In stock","price": "$799.08"},
                 {"id": "5","heading": "Product title5","description": "Product description5","availability": "In stock","price": "$899.08"},
                 {"id": "6","heading": "Product title6","description": "Product description6","availability": "In stock","price": "$999.08"},
                 {"id": "7","heading": "Product title7","description": "Product description7","availability": "In stock","price": "$1099.08"},
                 {"id": "8","heading": "Product title8","description": "Product description8","availability": "In stock","price": "$1199.08"}
                ];
      },
    };
  }]);
