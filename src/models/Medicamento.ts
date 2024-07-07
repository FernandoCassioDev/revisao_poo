import { Produto } from "./Produto";

export class Medicamento extends Produto {
  private _generico: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    generico: string
  ) {
    super(id, nome, tipo, preco);
    this._generico = generico
  }

  public get generico(): string{
    return this._generico
  }

  public set generico(value: string){
    this._generico = value
  }

  public visualizar(){
    super.visualizar()
    console.log(`generico: ${this._generico}`)
  }
}
