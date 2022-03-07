(function(){
'use strict';
    angular.module('PatModule',[])
        .controller('PatController',PatController);

    /* PatController.$inject=['$scope'];
    function PatController($scope){ */
    PatController.$inject=['$scope','$timeout'];
    function PatController($scope,$timeout){
        $scope.counter=0;

        $scope.upCounter = function(){
            //setTimeout(function(){
                //$scope.counter++;
                //console.log("Counter incremented !");
                //$scope.$digest(); // permet de lancer le digest qui n'aurait pas été lancé puisque setTimeout n'est pas dans le scope et donc pas dans le contexte angular
                // Le problème de cette façon de faire est que les exceptions ne sont pas gérés dans Angular
                // Il y a une meilleur méthode avec Apply().

                 /***********Apply**************/
           /*  setTimeout(function(){
                $scope.$apply(function(){
                    $scope.counter++;
                    console.log("Counter incremented !");
                });
                // Toujours regarder s'il existe une service Angular qui fait déjà cela.
                //Evidement, c'est le cas ici.






            },2000); */
            /********* Service Timeout fourni par Angular qui du coup appelle le Digest */
            $timeout(function(){
                $scope.counter++;
                console.log("Counter incremented !");

            },2000);

           

        };


        
    }






})();