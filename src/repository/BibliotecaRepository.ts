import { Livro } from "../models/Livro";
import { Usuario } from "../models/Usuario";

export interface BibliotecaRepository{
    //métodos da biblioteca
    adicionarLivro(livro: Livro):void
    removerLivro(livroId: number):void
    cadastrarUsuario(usuario: Usuario):void
    removerUsuario(idUsuario: number):void
    
    
    //métodos emprestimo
    realizarEmprestimo(idLivro: number, idUsuario:number, dataEmprestimo: string):void
    registrarDevolucao(idLivro: number, idUsuario:number, dataDevolucao: string):void 
    verificarDisponibilidade(livroId: number): void  

    //métodos de consulta
    consultarLivro(livro: string | number):void
}