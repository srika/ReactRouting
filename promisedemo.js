
function promiseDemo(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(80);
            reject('city not found');
        }, 1000);
    })
}

promiseDemo('pune').then(function(temp){
    console.log('promise is success',temp);
}, function(err){
    console.log('error found', err);
})