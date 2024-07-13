import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export abstract class Biblioteca {
  private _livro: Livro | null;
  private _usuario: Usuario | null;

  constructor(livro: Livro | null, usuario: Usuario | null) {
    this._usuario = usuario;
    this._livro = livro;
  }

    /**
     * Getter livro
     * @return {Livro}
     */
	public get livro(): Livro | null{
		return this._livro;
	}

    /**
     * Getter usuario
     * @return {Usuario}
     */
	public get usuario(): Usuario | null{
		return this._usuario;
	}

    /**
     * Setter livro
     * @param {Livro} value
     */
	public set livro(value: Livro) {
		this._livro = value;
	}

    /**
     * Setter usuario
     * @param {Usuario} value
     */
	public set usuario(value: Usuario) {
		this._usuario = value;
	}

}
