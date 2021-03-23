a = [1,2,3,4];

const search = (y, x) =>{
    var flag = false;
    for(var i=0; !flag && i < y.length; i++){
        
       if(x === y[i]){
            flag=true;
        }          
    }
    if(flag){
        console.log('True');
    } else {
        console.log('false');
    }
}

search(a, 1);