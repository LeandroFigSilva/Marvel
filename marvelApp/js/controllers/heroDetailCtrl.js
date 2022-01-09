angular.module('marvelApp').controller('heroDetailCtrl', function($scope, $http, $routeParams, marvelKeys){
    console.log($routeParams.id)

    const keys = marvelKeys.getKeys();
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters/';

    let config= { 
        params : {
            "ts": keys.ts,
            "apikey": keys.publicKey,
            "hash": keys.hash,
            //"limit": 50,
            //"nameStartsWith" : 'A',
            //"orderBy" : 'modified'
        }
    }


    let getHero=() =>{
       return new Promise(resolve =>{
            $http.get(`${baseUrl}${$routeParams.id}`, config).then(
                function(resp){
                    $scope.hero=resp.data.data.results[0];                    
                    resolve();                    
                }
            )
       })
    };
    getHero();

    let getHeroComics=() =>{
        return new Promise(resolve =>{
             $http.get(`${baseUrl}${$routeParams.id}/comics`, config).then(
                 function(resp){
                     $scope.heroComics=resp.data.data.results;                    
                     resolve();                    
                 }
             )
        })
     };
     getHeroComics();
})