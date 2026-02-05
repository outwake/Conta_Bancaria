import { Conta } from "./Conta";
import { colors } from "../util/Colors";


export class ContaPoupança extends Conta{

    private _diaAniversario: number;


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number , diaAniversario: number) {
        super(numero, agencia, titular, tipo, saldo)
		this._diaAniversario = diaAniversario;
	}
	

	public get diaAniversario(): number {
		return this._diaAniversario;
	}

	public set diaAniversario(value: number) {
		this._diaAniversario = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.greenstrong,`Dia do Aniversário: ${this._diaAniversario} \n ` )
    }
}