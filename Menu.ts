
import { colors } from "./src/util/Colors"
import { Input } from "./src/util/Input";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupança } from "./src/model/ContaPoupança";
import { ContaController } from "./src/controller/ContaController";

//criar objeto global da classe ContaController
const contas = new ContaController();


//Criar Array contendo os tipos de conta
const tiposContas= [`Conta Corrente`, `Conta Poupança`]


export function main() {

function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, "Amando Magro", 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'Joao da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupança(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupança(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}
    //Criar as contas e apagar no console
    criarContasTeste();
    console.clear();


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

        console.clear();
        console.log(colors.bg.black, colors.fg.green,
                    "========================")
        console.log("        Criar conta       ")
        console.log("========================== \n")
        criarConta();

        break;

        case 2:
        console.clear();
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  LISTA DAS CONTAS ATIVAS ")
        console.log("*************************** \n", colors.reset)
            contas.listarTodas();
            keyPress();

        break;
        
        case 3:
        console.clear();    
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  BUSCAR CONTA POR NUMERO ")
        console.log("*************************** \n", colors.reset)
        buscarContaPorNumero();
        keyPress();
        break;
        
        case 4:
        console.clear();    
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("  ATUALIZAR DADOS DE CONTA ")
        console.log("*************************** \n", colors.reset)
        atualizarConta();

            keyPress();

        break;

        case 5:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("       APAGAR CONTA       ")
        console.log("*************************** \n", colors.reset)
        deletarContaPorNumero();
        keyPress();
        break;

        case 6:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("           SACAR          ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja sacar:")
            sacar();
            keyPress();
        break;

        case 7:
        console.log(colors.bg.black, colors.fg.white,
                    "**************************")
        console.log("         DEPOSITAR         ")
        console.log("*************************** \n", colors.reset)
        console.log("Digite o numero da conta que deseja depositar:")
            depositar();
            keyPress();
        break;

        case 8:
        console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log(" TRANSFERÊNCIA ENTRE CONTAS  ")
        console.log("****************************\n", colors.reset)
        transferir();

        keyPress();
        break;

        case 9:
            console.log(colors.bg.black, colors.fg.white,
                    "*****************************")
        console.log("     BUSCA PELO TITULAR      ")
        console.log("****************************\n", colors.reset)
        buscaNome();     
        keyPress();
        break;
        
        case 0:
        sobre();
        process.exit(0);
        break;
    }
}

    /* Opção 1: Criar uma nova conta*/
    function criarConta(){
        // Agencia
        console.log("Digite o numero da agencia:")
        const agencia = Input.questionInt("");

        //Nome do Titular
        console.log("Digite o nome do Titular:")
        const titular = Input.question("");

        // Definição Tipo da conta
        console.log("Digite o tipo da Conta:")
        const tipo = Input.keyInSelect(tiposContas, "", {cancel: false}) + 1;

        //Saldo
        console.log("Digite o saldo da conta :")
        const saldo = Input.questionFloat("");

        //Tipo da Conta
        switch(tipo){
        case 1: //Conta corrente
            console.log("Digite o limite da conta:")
            const limite = Input.questionFloat("");


            console.log(colors.fg.yellow)
            console.log("Confirma o cadastro? (S) Sim (N) Não", colors.reset)
            let op2 = Input.question("").toUpperCase();   
                
                    if(op2==="S"){  
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
                    } else{
                         console.log(colors.fg.red,"Usuário não cadastrado!", colors.reset)
                    }
        break;

        case 2: //Conta poupança
            console.log("Digite o dia do aniversário da conta:")
            const aniversario = Input.questionInt("");
            console.log(colors.fg.yellow)
                    console.log("Confirma o cadastro? (S) Sim (N) Não", colors.reset)
                    op2 = Input.question("").toUpperCase();   
                
                    if(op2==="S"){   
                        if (aniversario<=31){
                            contas.cadastrar(new ContaPoupança(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario))
                     }else {
                        console.log(colors.fg.red, "Dia Não Aceito!", colors.reset)
                                return criarConta();} 
    
                }else{
                         console.log(colors.fg.red,"Usuário não cadastrado!", colors.reset)
                    }
            
        break;

        }
        
    }

        //Procurar Conta

        function buscarContaPorNumero():void{
        console.log("Digite o numero da conta:")
        const numero = Input.questionInt("");

        contas.procurarPorNumero(numero);
        }

        
        //Opção 4: Atualizar
            function atualizarConta(): void{

        console.log("Digite o numero da conta:")
        const numero = Input.questionInt("");

        const conta = contas.buscarNoArray(numero);

                if(conta !== null){

                    //Guarda os valores atuais da conta
                    let agencia = conta.agencia;
                    let titular = conta.titular;
                    const tipo = conta.tipo;
                    let saldo = conta.saldo;
                   

                        //Atualização da Agência
                console.log(`\n Agência Atual: ${agencia}`);
                console.log("Digite o numero da nova Agência \n (Pressione Enter para manter o valor atual");
                 agencia = Input.questionInt("", { defaultInput: agencia });

                //Atualização do Titular
                 console.log(`\n Nome do Titular: ${titular}`);
                console.log("Digite o novo nome do Titular \n (Pressione Enter para manter o valor atual");
                titular = Input.question("", { defaultInput: titular });

                //Atualização de Saldo
                console.log(`\n Saldo atual: ${saldo}`);
                console.log("Digite novo Saldo: \n (Pressione Enter para manter o valor atual");
                 saldo = Input.questionFloat("", { defaultInput: saldo });


                //Tipo da Conta
                     switch(tipo){
                    case 1: //Conta corrente
                        let limite1: number = (conta as ContaCorrente).limite;
                        //Atualização do 
                        console.log(`\n Limite Atual: ${limite1}`)
                        console.log("Digite o limite Atual:")
                        limite1 = Input.questionFloat("", { defaultInput: limite1 });
                        contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite1))
                    break;

                    case 2: //Conta poupança
                        let aniversario1: number = (conta as ContaPoupança).diaAniversario;
                        console.log(`\n Limite Atual: ${aniversario1}`)
                        console.log("Digite o novo dia do aniversário da conta:")
                        aniversario1 = Input.questionInt("", { defaultInput: aniversario1 });
                        contas.atualizar(new ContaPoupança(numero, agencia, titular, tipo, saldo, aniversario1))
                        
                    break;
                    }

                }

            }
        //Opção 5: Deletar Conta
        function deletarContaPorNumero():void{
            console.log("Digite o numero da conta:")
            const numero = Input.questionInt("");
            let op= Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase();
        
                  if(op==="S"){
                        contas.deletar(numero);
            
                     }

                  else if(op ==="N" || op!=="S"){

                     return;
                     
                     }
        }

        //Opçao 6 Function Sacar
        function sacar():void{
            console.log("Digite o numero da conta:")
            const numero = Input.questionInt("")

            const conta = contas.buscarNoArray(numero)

            if (conta!== null){
                console.log ("Digite o valor do saque:");
                const valor = Input.questionFloat("");

                contas.sacar(numero, valor);
            }
            else{
                console.log(colors.fg.red, `A conta numero ${numero} não foi encontrada!`, colors.reset)
            }


        }

        //Opção 7 Depositar
        function depositar(): void{
             console.log("Digite o numero da conta:")
            const numero = Input.questionInt("")

            const conta = contas.buscarNoArray(numero)

            if (conta!== null){
                console.log ("Digite o valor do depósito:");
                const valor = Input.questionFloat("");

                contas.depositar(numero, valor);
            }
            else{
                console.log(colors.fg.red, `A conta numero ${numero} não foi encontrada!`, colors.reset)
            }
        }

        // Opção 8 Transferencia
        function transferir(): void{
        console.log("Digite o número da Conta de Origem:")
        const numeroOrigem= Input.questionInt("");

        console.log("Digite o número da Conta de Origem:")
        const numeroDestino= Input.questionInt("");

        const contaOrigem = contas.buscarNoArray(numeroOrigem);
        const contaDestino = contas.buscarNoArray(numeroDestino);

        if(contaOrigem=== null){
            console.log(colors.fg.red, `A conta de origem numero ${numeroOrigem} nao foi encontrada!`, colors.reset)
        }
        else if(contaDestino === null)
            console.log(colors.fg.red, `A conta destino numero ${numeroDestino} não foi encontrada!`)
        else{
            console.log("Digite o valor da Transferencia:  ");
            const valor= Input.questionFloat("");
            contas.transferir(numeroOrigem, numeroDestino, valor);
        }
        }

        //Opção 9 Função de busca
        function buscaNome(): void{
            console.log("Digite o Nome que deseja procurar:")
            const nomeTitular= Input.question("");

            //Localizar
            contas.procurarPorTitular(nomeTitular);
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


