// function removeDuplicates(array){
//     var x = [];
    
//     for(i=0; i < array.length; i++){
//         if(x.indexOf(array[i]) === -1) {
//             x.push(array[i]);
//         }
//     }
//     return x;
// }

// var names = [1,2,3,4,4,5];
// var x = removeDuplicates(names);
// console.log(x);

const removeDuplicates =(a)=>{
    var b = [];
    for(var i=0;i<a.length;i++){
        var result = false;
        for(var j=i+1;j<a.length;j++){
            if(a[i] == a[j]){
                result = true;
                break;
            }
        }
        if(result == false){b.push(a[i])}
    }
    return b;
}
    var names = [1,5,2,3,4,4,5];
   

    var x = removeDuplicates(names);
    console.log(x);