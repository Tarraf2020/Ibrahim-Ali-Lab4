var arr = [0,1,2,3,4,5];

const shuffle = (a,b) =>{
    
    if(b == 'right'){
        const x= a.pop();
       a.unshift(x);
       console.log(a);
    }else if(b == 'left'){
        const y= a.shift();
        a.push(y);
        console.log(a);
     }
}
shuffle(arr, 'right');