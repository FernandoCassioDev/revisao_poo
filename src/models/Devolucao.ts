import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Devolucao extends Biblioteca{
  
  private _dataDevolucao: string;
  

  constructor(
    livro: Livro | null,
    usuario: Usuario | null,
    dataDevolucao: string
  ) {
    super(livro, usuario)
    
    this._dataDevolucao = dataDevolucao
  }



    /**
     * Getter dataDevolucao
     * @return {string}
     */
	public get dataDevolucao(): string {
		return this._dataDevolucao;
	}

    /**
     * Setter dataDevolucao
     * @param {string} value
     */
	public set dataDevolucao(value: string) {
		this._dataDevolucao = value;
	}

}
