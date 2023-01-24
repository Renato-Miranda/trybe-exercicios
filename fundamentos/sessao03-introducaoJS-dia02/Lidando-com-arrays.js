// Percorra o array imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// Some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let i = 0; i < numbers.length; i+=1) {
    sum += numbers[i];
}

// console.log(sum)

// Calcule e imprima a média aritmética dos valores contidos no array

let media = 0;

// for(let i = 0; i < numbers.length; i+=1) {
//     media +=  numbers[i] / numbers.length;
// }


//     if(media > 20) {
//         console.log('valor maior que 20');
//     }else{
//         console.log('valor menor ou igual a 20');
//     }

// console.log(media);

let maiorValor = 0;

for(let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] > maiorValor) {
        maiorValor = numbers[i]
    }
}
console.log(maiorValor)