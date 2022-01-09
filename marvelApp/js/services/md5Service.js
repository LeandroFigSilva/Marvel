angular.module('marvelApp').factory('md5Hash', function(){
    let _getMd5 = (txt)=>{
        let hash = md5(txt);
        return hash;
    }

    return{
        getMd5: _getMd5
    }
})