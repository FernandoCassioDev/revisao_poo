import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProductController implements ProdutoRepository {
  private produtos: Array<Produto> = new Array<Produto>();

  public id: number = 0;

  criarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto Criado!`);
  }
  listarProdutos(): void {
    console.log(`Lista de produtos`);
    for (let produtos of this.produtos) {
      produtos.visualizar();
    }
  }
  consultarProdutos(idProduto: number): void {
    let resBusca = this.buscarNoArray(idProduto)

    if (resBusca != null) console.log(resBusca.visualizar());
    else console.log("Produto não encontrado!");
  }
  atualizarProduto(idProduto: number, novoProduto: Produto): void {
    let resBusca = this.buscarNoArray(idProduto);

    if (resBusca != null) {
      this.deletarProduto(idProduto)

      this.criarProduto(novoProduto)

      console.log("Produto atualizado");
    }else{
        console.log("Produto não encontrado!")
    }
  }
  deletarProduto(idProduto: number): void {
    let resBusca = this.buscarNoArray(idProduto);

    if (resBusca != null) {
      this.produtos.splice(this.produtos.indexOf(resBusca), 1);
      console.log("Produto deletado");
    } else {
      console.log(`Produto não encontrado`);
    }
  }

  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(id: number): Produto | null {
    for (let produto of this.produtos) {
      if (produto.id === id) return produto;
    }
    return null;
  }
}
