import leia from "readline-sync"
import { colors } from "./src/util/Colors"


let conta

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




