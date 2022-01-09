angular.module('marvelApp').controller('marvelAppCtrl', function($scope, $http, $location, md5Hash, marvelKeys){
   
    
        
        const keys = marvelKeys.getKeys();

        const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
        // const publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
        // const privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
        // const ts = Number(new Date());

        //let hash = md5(ts + privateKey + publicKey);
        //let hash = md5Hash.getMd5(keys.ts + keys.privateKey + keys.publicKey);
        //console.log(hash)

        let config= { 
            params : {
                "ts": keys.ts,
                "apikey": keys.publicKey,
                "hash": keys.hash,
                "limit": 50,
                "offset": Math.floor(Math.random() * 1000)
                //"nameStartsWith" : 'A',
                //"orderBy" : 'modified'
            }
        }

        $scope.findHero = function(){
            //console.log($scope.txtHero)
            //let allHeroes = angular.copy($scope.myHeroes)
            
            // let filterHero = allHeroes.filter(hero => hero.name.includes($scope.txtHero));
            // $scope.heroes = filterHero
            if($scope.txtHero == ''){
                delete config.params.nameStartsWith
                config.params.orderBy = 'modified';
            }else{
                config.params.nameStartsWith = $scope.txtHero;
                config.params.orderBy = 'name';
            }
            getHeroes();
        }

        $scope.heroeDetail = function(id){
            console.log(id)
            $location.path(`/heroDetail/${id}`);
        }

        let getHeroes=() =>{
            return new Promise(resolve =>{
                $http.get(baseUrl, config).then(
                    function(resp){
                        $scope.heroes=resp.data.data.results
                        resolve();
                        
                    }
                )
            })
        };
        getHeroes();

        // $http.get(baseUrl, config).then(
        //     function(resp){
        //         $scope.heroes = resp.data.data.results;
        //         $scope.myHeroes = resp.data.data.results;
        //         console.log(resp.data.data)
        //     }
        // )
   

    

})