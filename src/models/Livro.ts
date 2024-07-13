export class Livro {
  private _id: number;
  private _titulo: string;
  private _autor: string;
  private _anoPublicacao: number;
  private _disponivel: boolean;
  private _genero: string;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    anoPublicacao: number,
    disponivel: boolean,
    genero: string
  ) {
    this._id = id;
    this._titulo = titulo;
    this._autor = autor;
    this._anoPublicacao = anoPublicacao;
    this._disponivel = disponivel;
    this._genero = genero;
  }

  public get id(): number {
    return this._id;
  }

  /**
   * Getter titulo
   * @return {string}
   */
  public get titulo(): string {
    return this._titulo;
  }

  /**
   * Getter autor
   * @return {string}
   */
  public get autor(): string {
    return this._autor;
  }

  /**
   * Getter disponivel
   * @return {boolean}
   */
  public get disponivel(): boolean {
    return this._disponivel;
  }

  /**
   * Getter genero
   * @return {string}
   */
  public get genero(): string {
    return this._genero;
  }

      /**
     * Getter anoPublicacao
     * @return {number}
     */
	public get anoPublicacao(): number {
		return this._anoPublicacao;
	}

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter titulo
   * @param {string} value
   */
  public set titulo(value: string) {
    this._titulo = value;
  }

  /**
   * Setter autor
   * @param {string} value
   */
  public set autor(value: string) {
    this._autor = value;
  }

  /**
   * Setter disponivel
   * @param {boolean} value
   */
  public set disponivel(value: boolean) {
    this._disponivel = value;
  }

  /**
   * Setter genero
   * @param {string} value
   */
  public set genero(value: string) {
    this._genero = value;
  }


    /**
     * Setter anoPublicacao
     * @param {number} value
     */
	public set anoPublicacao(value: number) {
		this._anoPublicacao = value;
	}

  visualizarLivro(): void{
    console.log(`Dados do livro: `)
    console.log(`Id: ${this._id}`)
    console.log(`titulo: ${this._titulo}`)
    console.log(`autor: ${this._autor}`)
    console.log(`ano de publicação: ${this._anoPublicacao}`)
    console.log(`genêro: ${this._genero}`)
  }

}
