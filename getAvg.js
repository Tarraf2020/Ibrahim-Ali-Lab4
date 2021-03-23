
const getAvg = (...a) =>{
    var sum = 0;
    for(var i=0 ;i < a.length; i++){
        sum = sum + a[i];
    }
    div = sum / a.length;

    console.log(div);
}


getAvg(1, 2, 3, 4);