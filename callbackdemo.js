function getTempCallBack(location, callback){
    callback(undefined, 80);
    callback('city is not found');
}

getTempCallBack('pune', function(err, temp){
    if(err){
        console.log('error', err);
    }
    else{
        console.log('success', temp);
    }
});