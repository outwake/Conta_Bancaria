
import { colors } from "./src/util/Colors"
import { Input } from "./src/util/Input";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupança } from "./src/model/ContaPoupança";



let criaC: String;

export function main() {
    //instanciar o objeto
    //const c1 = new Conta(1021, 1234, "Sofia", 1 , 100000.00)
//
    //teste metodo sacar
    //console.log("Sacar 100,00:", c1.sacar(100));
    //console.log("Sacar 200000.00:", c1.sacar(200000.00));
    //console.log("Sacar 0:", c1.sacar(0));

    //teste metodo depositar
    //console.log("Depositar -100,00:")
    //c1.depositar(-100);
    //console.log("Depositar 500:") 
    //c1.depositar(500);
    //console.log("Depositar 0:")
    //c1.depositar(0);

    //teste da classe conta corrente
    const cc1= new ContaCorrente(2, 5678, "Larissa", 1, 200000.00, 2000.00);
    const cc2 = new ContaPoupança (3, 8408, "Vinicius", 2, 300000.00, 4)

    console.log("Sacar 200000.00:", cc1.sacar(200000.00));
    console.log("Sacar 0:", cc1.sacar(0));
    //nao precisa colocar console.log
    //c1.visualizar();

    //Brincando com o metodo sacar e depositar
    cc1.visualizar();
    console.log("Sacar 200000.00:", cc1.sacar(1000));
    console.log("Sacar 0:", cc1.sacar(200000));
    //o saldo vai ficar -1000
    cc1.visualizar();
    console.log("Depositar 500:") 
    cc1.depositar(5000);
    // saldo vai ficar 4000 pois 5000-1000 = 4000
    cc1.visualizar();

    cc2.visualizar();



while(true){    
console.log(colors.bg.black, colors.fg.magenta,
            "\n==================================================");
console.log("||                Banco do Brazil               ||");
console.log("==================================================");
console.log("||         |1| Criar conta                      ||");
console.log("||         |2| Listar todas as contas           ||");
console.log("||         |3| Buscar conta por numero          ||");
console.log("||         |4| Atualizar dados da conta         ||");
console.log("||         |5| Apagar conta                     ||");
console.log("||         |6| Sacar                            ||");
console.log("||         |7| Depositar                        ||");
console.log("||         |8| Transferir valores entre contas  ||");
console.log("||         |9| Buscar pelo titular              ||");
console.log("||         |0| Sair                             ||");
console.log("==================================================");
console.log("                                                  ",
colors.reset);

    console.log("Digite a Opção desejada:\n")
    let opcao= Input.questionInt("")
    
    switch (opcao) {

        case 1:

        do{
        console.log(colors.bg.black, colors.fg.whitestrong,
                    "*************************")
        console.log("        Criar conta       ")
        console.log("************************** \n")
        console.log("Digite o numero da agencia:")
        
        let teste = Input.question(" ");

        console.log (teste);

        console.log(colors.fg.red)
        criaC = Input.question(`Confirma a conta: \n Agencia: ${cc1.agencia}  || Conta: ${cc1.numero}\n Titular: ${cc1.titular} || Tipo de conta: ${cc1.tipo} \n Saldo Atual: ${cc1.saldo}
            \n (S) Sim  (N) No \n`).toUpperCase();

        console.log("***************************")    
        if(criaC==="S"){
            console.log("Conta criada com sucesso ^^")
            keyPress();
        }
        console.log("***************************", 
            colors.reset)

        }while(criaC==="N")
        break;

        case 2:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  LISTA DAS CONTAS ATIVAS ")
        console.log("*************************** \n", colors.reset)
            keyPress();

        break;
        case 3:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  BUSCAR CONTA POR NUMERO ")
        console.log("*************************** \n", colors.reset)
        keyPress();
        break;
        
        case 4:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  ATUALIZAR DADOS DE CONTA ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja atualizar:")

            keyPress();

        break;

        case 5:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("       APAGAR CONTA       ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja apagar:")
        keyPress();
        break;

        case 6:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("           SACAR          ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja sacar:")
            keyPress();
        break;

        case 7:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("         DEPOSITAR         ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja depositar:")

            keyPress();
        break;

        case 8:
        console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log(" TRANSFERÊNCIA ENTRE CONTAS  ")
        console.log("****************************\n", colors.reset)
        console.log("De qual conta você deseja transferir")

        console.log("Qual conta que você deseja receber? ")

        keyPress();
        break;

        case 9:
            console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log("     BUSCA PELO TITULAR      ")
        console.log("****************************\n", colors.reset)

        keyPress();
        break;
        
        case 0:
        sobre();
        process.exit(0);
        break;

        



    }
}

    function sobre(){
        console.log(colors.bg.black, colors.fg.cyanstrong,
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
    Input.prompt();
}

main();


