let num = 10;
if(num > 10){
    console.log ('suurem');
} else if(num === 10){
    console.log('võrdne');
} else {
    console.log('väiksem');
}

let day = new Date('2023-10-20').getDay();
console.log(day);
//if(day === 0){
//    console.log('Pühapäev');
//} else if(day === 1){
//   console.log('Esmaspäev');
//}

switch(day){
    case 0:
        console.log('Pühapäev');
        break;
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
        console.log('Teisipäev');
        break;  
    case 3:
        console.log('Its wednesday My DUDES!');
        break;
    case 4:
        console.log('Neljapäev');
        break;
    case 5:
        console.log('Its friday, friday, friday....');
        break;    
    case 6:
        console.log('Partyday')
        break;

    default:
        console.log('weirdday');    
 }