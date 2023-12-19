// desafio de nível de herói
// 1 - define a variável personagem
let personagem = "Matheus";
// define os pontos de experiência
let XP = 7500;
// retorna ao jogador que ele finalizou a prova
console.log("Parabéns " + personagem + "! Você chegou ao final da fase.");
//foi criado uma constante para agilizar o codigo
const mensagem = "O Herói " + personagem + " está no nível de ";
//estrutura de condição para decidir o nivél de experiencia 
switch (true) {
    case XP <= 1000:
        console.log(mensagem + "Ferro!");
        break;

    case XP >= 1001 && XP <= 2000:
        console.log(mensagem + "Bronze!");
        break;

    case XP >= 2001 && XP <= 5000:
        console.log(mensagem + "Prata!") 
        break;

    case XP >= 6001 && XP <= 7000:
        console.log(mensagem + "Ouro!")
        break;

    case XP >= 7001 && XP <= 8000:
        console.log(mensagem + "Platina!")
        break;

    case XP >= 8001 && XP <= 9000:
        console.log(mensagem + "Ascendente!")
        break;

     case XP >= 9001 && XP <= 10000:
        console.log(mensagem + "Imortal!")
        break;

    case XP >=10001:
        console.log(mensagem + "Radiante!")
        break;
    
}
