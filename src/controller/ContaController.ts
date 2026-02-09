import { stringify } from "node:querystring";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
import { Input } from "../util/Input";
import { formatarMoeda } from "../util/Currency";

export class ContaController implements ContaRepository{

    private listarContas= new Array<Conta>();

    public numero: number = 0;


    //Métodos do Crud
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta!== null){
            buscaConta.visualizar();
        }
        else
            console.log(colors.fg.red, "\n Conta não Encontrada!", colors.reset)
    }

    listarTodas(): void {
       for (let conta of this.listarContas) {
        conta.visualizar();
       }
    }

    cadastrar(conta: Conta): void {
        this.listarContas.push(conta);
        console.log(`A conta numero ${conta.numero} foi cadastrada com sucesso!`)
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);     
        if(buscaConta!== null){

            this.listarContas[this.listarContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green,`\n A Conta numero ${conta.numero} foi Atualizada com Sucesso`, colors.reset)
        }
        else
            console.log(colors.fg.red, "\n Conta não Encontrada!", colors.reset)
    }
    

    deletar(numero: number): void {
         const buscaConta = this.buscarNoArray(numero);
        let op: string;
        if(buscaConta!== null){
            op= Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase(); 
            if(op==="S"){
            this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1)
            console.log(colors.fg.green,`\n A Conta numero ${numero} foi Deletada com Sucesso`, colors.reset)
            }
            else if(op==="N") {
                return;
            }
        }
        else
            console.log(colors.fg.red, "\n Conta não Encontrada!", colors.reset)
    }


    //Esse aqui vale extra no performaceGO
    procurarPorTitular(titular: string): void {

        //filtragem dos dados
       const buscaPorTitular = this.listarContas.filter(conta => 
        conta.titular.toUpperCase().includes(titular.toUpperCase()));

        //listagem dos dados
        if (buscaPorTitular.length > 0){
            buscaPorTitular.forEach(conta => conta.visualizar());
        } else{
            console.log(colors.fg.red, `\n Nenhuma conta foi encontrada!!`, colors.reset)
        }
        
    }

    //Métodos Bancários
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta!== null){
            if(buscaConta.sacar(valor)===true)
                console.log(colors.fg.green, `\n O saque no valor ${formatarMoeda(valor)} na Conta número ${numero} foi realizado com sucesso`, colors.reset )
        }
        else
            console.log(colors.fg.red, `\n Conta numero ${numero} não foi encontrada!`, colors.reset)
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero)

        if(buscaConta !== null){
            buscaConta.depositar(valor);
            console.log(colors.fg.green, `\n O deposito no valor ${formatarMoeda(valor)} na Conta número ${numero} foi realizado com sucesso`, colors.reset )
        }
         else
            console.log(colors.fg.red, `\n Conta numero ${numero} não foi encontrada!`, colors.reset)
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
         const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        const buscaContaDestino = this.buscarNoArray(numeroDestino);

        if(buscaContaOrigem!== null && buscaContaDestino !== null){
            if(buscaContaOrigem.sacar(valor)===true){
                buscaContaDestino.depositar(valor);
                console.log(colors.fg.green, `\n A transferencia no valor ${formatarMoeda(valor)} da Conta número ${numeroOrigem} para a Conta número ${numeroDestino} foi realizado com sucesso`, colors.reset )
            }
        }
        else
            console.log(colors.fg.red, `\n Conta de origem/destino não foram encontradas!`, colors.reset)
    }
    
    //Métodos Auxiliares
    public gerarNumero(): number{
        return ++ this.numero;
    }
    
    public buscarNoArray(numero:number): Conta | null{
        for (const conta of this.listarContas) {
            if (conta.numero === numero){
                return conta;
            }
        }
        return null; 
    }
}