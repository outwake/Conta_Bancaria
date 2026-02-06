import { colors } from "../util/Colors";



export abstract class Conta{

    //Atributos da classe
    private _numero: number;
    private _agencia: number;
    private _titular: string;
    private _tipo: number;
    private _saldo: number;

    //Método construtor responsavel por instanciar na classe
    //Shift + ctrl + p Typescript Generator constructor
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._titular = titular;
		this._tipo = tipo;
		this._saldo = saldo;
	}

    //Método get e set
    //Shift + ctrl + p Typescript Generatte all setter and getter
    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get titular(): string {
		return this._titular;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}
   
	public set saldo(value: number) {
		this._saldo = value;
	}

    //Métodos Auxiliares

    //Método Sacar

    public sacar( valor : number): boolean{
         if(valor<=0){
            console.log(colors.fg.red , " Valor tem que ser positivo");
            return false;
        }

        else if (valor> this._saldo){
            console.log(colors.fg.red , " Saldo Insuficiente")
            return false;
        }
        else {
            this._saldo -= valor;
        return true;
        }


    }

    //Método depositar
    public depositar(valor:number): void{
        if(valor<=0){
            console.log(colors.fg.red , " Valor tem que ser positivo", colors.reset)
        }
        
        else{
         
         this._saldo += valor;
         console.log(colors.fg.red , " Valor foi depositado:", valor , colors.reset )
         console.log(colors.fg.red , " Valor atual", this._saldo , colors.reset )}
    }

    //Método visualizar
    public visualizar(): void{
        let tipo: string;
        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
            break;

            case 2:
                tipo = "Conta Poupança";
            break;

            default:
                tipo = "Tipo inválido";

        }

        console.log("\n====================================")
        console.log("||          DADOS DA CONTA         ||")
        console.log("====================================")
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`Numero da Agencia: ${this._agencia}`);
        console.log(`Nome do Titular: ${this._titular}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Saldo atual da Conta: R$ ${this._saldo}`);
    }
    
}

