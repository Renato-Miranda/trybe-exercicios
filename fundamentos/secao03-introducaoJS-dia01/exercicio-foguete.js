const a = 61;
const b = 60;
const c = 60;

let confere = a / 2 || b / 2 || c / 2;
if(confere % 2 !== 0){
    console.log(true);
}else{
    console.log(false);
}
