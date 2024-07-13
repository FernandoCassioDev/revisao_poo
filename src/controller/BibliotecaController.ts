import { Devolucao } from "../models/Devolucao";
import { Emprestimo } from "../models/Emprestimo";
import { Livro } from "../models/Livro";
import { Usuario } from "../models/Usuario";
import { BibliotecaRepository } from "../repository/BibliotecaRepository";

export class BibliotecaController implements BibliotecaRepository {
  //armazena os livros e usuários
  private listaLivros: Array<Livro> = new Array<Livro>();
  private listaUsuarios: Array<Usuario> = new Array<Usuario>();
  private listaEmprestimo: Array<Emprestimo> = new Array<Emprestimo>();
  private listaDevolucao: Array<Devolucao> = new Array<Devolucao>();

  public disponibilidade: boolean = true;

  public idLivro = 0;
  public idUsuario = 0;

  //implementa os métodos
  adicionarLivro(livro: Livro): void {
    this.listaLivros.push(livro);
    console.log("Livro adicionado!");
  }

  removerLivro(idLivro: number): void {
    const resBusca: Livro | null = this.buscarLivro(idLivro);

    if (resBusca != null) {
      this.listaLivros.splice(idLivro, 1);
      console.log("livro removido");
    } else {
      console.log("Livro não encontrado!");
    }
  }

  cadastrarUsuario(usuario: Usuario): void {
    this.listaUsuarios.push(usuario);
    console.log("Usuário cadastrado!");
  }

  removerUsuario(idUsuario: number): void {
    const resBusca: Usuario | null = this.buscarUsuario(idUsuario);

    if (resBusca != null) {
      this.listaUsuarios.splice(idUsuario, 1);
      console.log("Usuario removido");
    } else {
      console.log("Usuario não encontrado!");
    }
  }

  verificarDisponibilidade(livroId: number): boolean {
    const resBusca = this.buscarLivro(livroId);
    if (resBusca === null) {
      console.log("O livro não está disponivel");
      return false;
    }
    console.log("O livro está disponível");
    return true;
  }

  realizarEmprestimo(
    idLivro: number,
    idUsuario: number,
    dataEmprestimo: string
  ): void {
    if (this.buscarLivro(idLivro) != null) {
      this.listaEmprestimo.push(
        new Emprestimo(
          this.buscarLivro(idLivro),
          this.buscarUsuario(idUsuario),
          dataEmprestimo
        )
      );
      this.listaLivros.splice(idLivro, 1);
      this.disponibilidade = false;
      console.log("Emprestimo realizado!");
    } else {
      console.log("Este livro não está disponivel");
    }
  }

  consultarLivro(buscaLivro: string | number): void {
    if (typeof buscaLivro === "string") {
      let resBuscaLivros = this.listaLivros.filter((livro) =>
        livro.titulo.includes(buscaLivro)
      );

      resBuscaLivros.forEach((livro) => livro.visualizarLivro());
    } else if (this.buscarLivro(buscaLivro) != null) {
      this.buscarLivro(buscaLivro)?.visualizarLivro();
    } else {
      console.log("Livro não encontrado!");
    }
  }

  registrarDevolucao(
    idLivro: number,
    idUsuario: number,
    dataDevolucao: string
  ): void {
    if (this.buscarLivro(idLivro) === null) {
      this.listaDevolucao.push(
        new Devolucao(
          this.buscarLivro(idLivro),
          this.buscarUsuario(idUsuario),
          dataDevolucao
        )
      );
      for (let livro of this.listaDevolucao) {
        if (livro.livro?.id === idLivro) {
          this.listaLivros.push(livro.livro);
        }
      }
      this.disponibilidade = true;
      console.log("Devolução realizada!");
    } else {
      console.log("Este livro não foi emprestado");
    }
  }

  gerarIdLivro(): number {
    return ++this.idLivro;
  }

  gerarIdUsuario(): number {
    return ++this.idUsuario;
  }

  buscarLivro(id: number): Livro | null {
    for (let livro of this.listaLivros) {
      if (livro.id === id) return livro;
    }
    console.log("Livro não encontrado");
    this.disponibilidade = false;
    return null;
  }

  buscarUsuario(id: number): Usuario | null {
    for (let usuario of this.listaUsuarios) {
      if (usuario.id === id) return usuario;
    }
    console.log("Livro não encontrado");
    return null;
  }

  visualizarLivros() {
    console.log("Lista dos livros na biblioteca: ");
    for (let livro of this.listaLivros) {
      livro.visualizarLivro();
    }
  }
}
