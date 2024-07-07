import { Produto } from "./Produto";

export class Cosmetico extends Produto {
  private _fragrancia: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    fragrancia: string
  ) {
    super(id, nome, tipo, preco);
    this._fragrancia = fragrancia
  }

  public get generico(): string{
    return this._fragrancia
  }

  public set generico(value: string){
    this._fragrancia = value
  }

  public visualizar(){
    super.visualizar()
    console.log(`Fragrancia: ${this._fragrancia}`)
  }
}