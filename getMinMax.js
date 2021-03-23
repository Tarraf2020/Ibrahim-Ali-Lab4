var number = [1,2,3,4,5];

const getMinMax = (x) =>{
    var max = -Infinity;
    var min = Infinity;

    for(var i=0;i< x.length;i++){
        if(x[i] > max){
           max= x[i];
        }}
        for(var i=0;i< x.length;i++){
            if (x[i] < min){
                min =x[i];
            }
        
    } console.log('the max number is: ' + max +' the min number is: ' + min);
}
getMinMax(number);
