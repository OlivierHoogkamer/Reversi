const Game = (function(url){
    
    let configMap = {
        apiUrl : url,
    }
    const privateInit = function(){
        console.log('private info');
        console.log(apiUrl);
    }


    return {
        init: privateInit
    }
})('/api/url')