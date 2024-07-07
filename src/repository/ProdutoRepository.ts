import { Produto } from "../models/Produto";

export interface ProdutoRepository {
  //métodos CRUD
  criarProduto(produto: Produto): void;
  listarProdutos(): void;
  consultarProdutos(idProduto: number): void;
  atualizarProduto(idProduto: number, produto: Produto): void;
  deletarProduto(idProduto: number): void;
}
