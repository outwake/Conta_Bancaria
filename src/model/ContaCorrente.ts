import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    //Atributos específicos de conta corrente
    private _limite: number;

    //Quando voce está cuidando da herança, voce tem que ao criar o construtor, colocar os atributos da classe pai
    //Então fazemos a chamada nessa parte do construtor e depois chama o método super com os atributos
    //Não há meia herança é tudo
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number , limite: number) {
        super(numero, agencia, titular, tipo, saldo);
		this._limite = limite;
	}


    //Métodos get e set especificos da classe corrente
    
	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}


	//Método de Polimorfismo, tem que chamar o método da classe pai e acrescentar o que voce quer

	//Método visualizar
	public visualizar(): void {
		super.visualizar();
		console.log(`Limite da conta: R$ ${this._limite} \n`)
	}
	

	//método sacar sobrescrito
	public sacar( valor : number): boolean{
			 if(valor <= 0){
				console.log(colors.fg.red , " Valor tem que ser positivo");
				return false;
			}
	
			else if (valor > (this.saldo + this._limite)){
				console.log(colors.fg.red , " Saldo Insuficiente")
				return false;
			}
			else {
				this.saldo -= valor;
			return true;
			}
		}
	


}

