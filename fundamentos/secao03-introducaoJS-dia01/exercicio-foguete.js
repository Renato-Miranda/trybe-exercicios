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

/*const custoProd = -2;
const valorVenda = 200;

if (custoProd >=0 && valorVenda >=0){
    const custoTotalProd = custoProd * 1.2;
    const lucroTotal = (valorVenda - custoTotalProd) * 1000;
    console.log(lucroTotal);
}else{
    console.log("Erro, Valor negativo!")
};
*/

let aliquotaINSS;
let aliquotaIR;

const salarioBruto = 3000.00;

if(salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
}else{
    aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98){
    aliquotaIR = 0;
}else if(salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}else if(salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
}else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}else{
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}
 console.log("Salário liquido: " + (salarioBase - aliquotaIR));
