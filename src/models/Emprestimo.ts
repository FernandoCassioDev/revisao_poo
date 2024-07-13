import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Emprestimo extends Biblioteca{
  
  private _dataEmprestimo: string;
  

  constructor(
    livro: Livro | null,
    usuario: Usuario | null,
    dataEmprestimo: string
  ) {
    super(livro, usuario)
    
    this._dataEmprestimo = dataEmprestimo
  }


    /**
     * Getter dataEmprestimo
     * @return {string}
     */
	public get dataEmprestimo(): string {
		return this._dataEmprestimo;
	}

    /**
     * Setter dataEmprestimo
     * @param {string} value
     */
	public set dataEmprestimo(value: string) {
		this._dataEmprestimo = value;
	}




}
