/*const a = 61;
const b = 60;
const c = 60;

let confere = a / 2 || b / 2 || c / 2;
if(confere % 2 !== 0){
    console.log(true);
}else{
    console.log(false);
}
*/

const custoProd = -2;
const valorVenda = 200;

if (custoProd >=0 && valorVenda >=0){
    const custoTotalProd = custoProd * 1.2;
    const lucroTotal = (valorVenda - custoTotalProd) * 1000;
    console.log(lucroTotal);
}else{
    console.log("Erro, Valor negativo!")
};
