let situacao = 'lista'


switch(situacao){
    case 'aprovado':
    console.log('Parabéns, Você foi aprovada!');
    break;
    
    case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

    case 'reprovado':
    console.log ('Você foi reprovada');
    break;

    default:
        console.log('Informação incorreta')

}