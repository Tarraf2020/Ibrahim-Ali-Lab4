var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8, 9, 0];
var a = [];

const intersect =(x, y)=>{

    for(var i=0;i<x.length;i++){
        for(var j=0;j<y.length;j++){
            if(x[i] == y[j]){
                a.push(x[i]);
            }
        }
    }
console.log(a);
}
intersect(arr1, arr2);