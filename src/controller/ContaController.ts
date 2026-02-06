import { stringify } from "node:querystring";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
import { Input } from "../util/Input";

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

    procurarPorTitular(titular: string): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Bancários
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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