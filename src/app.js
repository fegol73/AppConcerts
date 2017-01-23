var gifwalletApp = angular.module('gifwalletApp', []);

gifwalletApp.controller('GifListController', ['$scope', 'Storage',
    function($scope, Storage) {
        $scope.giflist = Storage.list();
    }
]);

gifwalletApp.controller('MenuController', ['$scope', 'Storage',
    function($scope, Storage) {

        $scope.add = function() {
            var url = prompt('Ingrese una URL');
            if (url != null) {
                var image = {
                    'name': 'Ejemplo',
                    'url': url,
                    'tags': [],
                    'favorite': false
                };
                Storage.save(image);
            }
        };

    }
]);

gifwalletApp.service('Storage', ['$window',
    function($window) {
        var images = [];

        if (!$window.localStorage) {
            alert('No tienes localStorage activado');
        } else {
            images = $window.localStorage.getItem('gifWallet');
        }

        this.save = function(image) {
            if (images == null) {
                images = [];
            }
            else {
                images = angular.fromJson(images);
            }
            images.push(image);
            imagesString = JSON.stringify(images);
            $window.localStorage.setItem('gifWallet', imagesString);
        }

        this.get = function(key) {

        }

        this.remove = function(key) {

        }

        this.list = function() {
            return angular.fromJson($window.localStorage.getItem('gifWallet'));
        }
    }
]);
