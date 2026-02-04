import leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";



export function main() {
    //instanciar o objeto
    const c1 = new Conta(1021, 1234, "Sofia", 1 , 100000.00)

    //teste metodo sacar
    console.log("Sacar 100,00:", c1.sacar(100));
    console.log("Sacar 200000.00:", c1.sacar(200000.00));
    console.log("Sacar 0:", c1.sacar(0));

    //teste metodo depositar
    console.log("Depositar -100,00:")
    c1.depositar(-100);
    console.log("Depositar 500:") 
        c1.depositar(500);
    console.log("Depositar 0:")
         c1.depositar(0);

         
    let criaC: String;


while(true){    
console.log(colors.bg.black, colors.fg.magenta,
            "************************************************");
console.log("*                 Banco do Brazil                *");
console.log("**************************************************");
console.log("           |1| Criar conta                        ");
console.log("           |2| Listar todas as contas             ");
console.log("           |3| Buscar conta por numero            ");
console.log("           |4| Atualizar dados da conta           ");
console.log("           |5| Apagar conta                       ");
console.log("           |6| Sacar                              ");
console.log("           |7| Depositar                          ");
console.log("           |8| Transferir valores entre contas    ");
console.log("           |9| Buscar pelo titular                ");
console.log("           |0| Sair                               ");
console.log("**************************************************");
console.log("                                                  ",
colors.reset);

    let opcao= leia.questionInt("Digite a Opção desejada:\n")
    
    switch (opcao) {

        case 1:
           
        console.log(colors.bg.black, colors.fg.white,
                    "*************************")
        console.log("        Criar conta       ")
        console.log("************************** \n")
        console.log("Digite o numero da agencia:")
        console.log(colors.fg.red)
        criaC = leia.keyIn(`Confirma a conta: \n Agencia: ${c1.agencia}  || Conta: ${c1.numero}\n Titular: ${c1.titular} || Tipo de conta: ${c1.tipo} \n Saldo Atual: ${c1.saldo}`);
        console.log("***************************", 
            colors.reset)
        break;

        case 2:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  LISTA DAS CONTAS ATIVAS ")
        console.log("*************************** \n", colors.reset)



        break;
        case 3:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  BUSCAR CONTA POR NUMERO ")
        console.log("*************************** \n", colors.reset)
        
        break;

        case 4:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  ATUALIZAR DADOS DE CONTA ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja atualizar:")



        break;

        case 5:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("       APAGAR CONTA       ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja apagar:")
        break;

        case 6:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("           SACAR          ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja sacar:")

        break;

        case 7:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("         DEPOSITAR         ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja depositar:")


        break;

        case 8:
        console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log(" TRANSFERÊNCIA ENTRE CONTAS  ")
        console.log("****************************\n", colors.reset)
        console.log("De qual conta você deseja transferir")

        console.log("Qual conta que você deseja receber? ")
        break;

        case 9:
            console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log("     BUSCA PELO TITULAR      ")
        console.log("****************************\n", colors.reset)
        break;
        
        case 0:
        sobre();
        process.exit(0);
        break;

        



    }
}

    function sobre(){
        console.log(colors.bg.black, colors.fg.cyan,
                    "***************************************************************");
        console.log("           OBRIGADO POR UTILIZAR O NOSSO BANCO \n               ");
        console.log("***************************************************************");
        console.log("           PROJETO DESENVOLVIDO POR LARY A PIORAL              ");
        console.log("               Siga-me no GitHub e Linkedin:                   ");
        console.log("                https://github.com/outwake                     ");
        console.log(" https://linkedin.com/in/larissa-ferreira-mendonça-49655a185/  ");
        console.log("***************************************************************",
            colors.reset);
        
    }
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(colors.reset,"\nPressione enter para continuar...");
    leia.prompt();
}

main();


