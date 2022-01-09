angular.module('marvelApp').factory('marvelKeys', function(md5Hash){
    let _getKeys = ()=>{
        const publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
        const privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
        const ts = Number(new Date());

        return {
            "publicKey": publicKey,
            "privateKey": privateKey,
            "ts": ts,
            "hash": md5Hash.getMd5(ts + privateKey + publicKey)
        };
    }

    return{
        getKeys: _getKeys
    }
})