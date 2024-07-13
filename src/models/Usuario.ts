export class Usuario {
  private _id: number;
  private _nome: string;
  private _email: string;
  private _telefone: number;

  constructor(id: number, nome: string, email: string, telefone: number) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._telefone = telefone;
  }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter telefone
     * @return {number}
     */
	public get telefone(): number {
		return this._telefone;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter telefone
     * @param {number} value
     */
	public set telefone(value: number) {
		this._telefone = value;
	}

}
