
for(let i=1; i<100; i++){
    let prime = true;
    for(let num=2; num<Math.floor(i/2); num++){
        if(i%num===0){
            prime= false;
        }
    }
    if(prime){
        console.log(i);
    }
}