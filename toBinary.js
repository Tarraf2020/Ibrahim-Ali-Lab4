const toBinary =(nb)=>{
    var a = nb.toString(2);
    return a;
}
var v = toBinary(5);
console.log(v);

const hashArray= (arr)=>{
    var s=[];
    for(var i=0;i<arr.length;i++){
       s.push(toBinary(arr[i]));
    }console.log(s);
}
var arr1 =[0,1,2,3,4];
hashArray(arr1);