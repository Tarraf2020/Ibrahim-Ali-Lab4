var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8, 9, 0];

const union =(x,y)=>{
    for(var i=0;i<y.length;i++){
        x.push(y[i]);
    }
    return x;
}
var rt = union(arr1,arr2);

function removeDuplicates(array){
    var x = [];
 
    for(i=0; i < array.length; i++){
        if(x.indexOf(array[i]) === -1) {
            x.push(array[i]);
        }
    }
    return x;
}
console.log(removeDuplicates(rt));