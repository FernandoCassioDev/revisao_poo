import { ProductController } from "./src/controller/ProdutoController";
import { Cosmetico } from "./src/models/Cosmetico";
import { Medicamento } from "./src/models/Medicamento";
import { Produto } from "./src/models/Produto";
import { colors } from "./src/util/Colors";
import readlinesync from "readline-sync";

const produto: ProductController = new ProductController();
const tipoProduto = ["Medicamento", "Cosmetico"];
let continuar = true;
while (true) {
  console.log(
    colors.fg.magentastrong,
    "****************************************"
  );
  console.log("                                         ");
  console.log("            FARMACIA CASSIO              ");
  console.log("                                         ");
  console.log("*****************************************");
  console.log("                                         ");
  console.log("             1- Criar Produto            ");
  console.log("             2- Listar todos os Produto  ");
  console.log("             3- Consultar produto por id ");
  console.log("             4- Atualizar Produto        ");
  console.log("             5- Deletar Produto          ");
  console.log("             6- Sair                     ");
  console.log("                                         ");
  console.log("*****************************************", colors.reset);

  console.log("\nDigite o numero da operação: ");
  let entrada = readlinesync.questionInt("");

  switch (entrada) {
    case 1:
      console.log(`\nDite o nome do Produto: `);
      let nomeProduto = readlinesync.question("");

      console.log(`\nDite o preço do Produto: `);
      let precoProduto = readlinesync.questionFloat("");

      console.log(`\nDite o tipo do Produto: `);
      let tipo =
        readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

      switch (tipo) {
        case 1:
          console.log(`\nGenerico: `);
          let genericoProduto = readlinesync.question("");

          produto.criarProduto(
            new Medicamento(
              produto.gerarId(),
              nomeProduto,
              precoProduto,
              tipo,
              genericoProduto
            )
          );
          break;
        case 2:
          console.log(`\nCosmetico: `);
          let cosmeticoProduto = readlinesync.question("");

          produto.criarProduto(
            new Cosmetico(
              produto.gerarId(),
              nomeProduto,
              precoProduto,
              tipo,
              cosmeticoProduto
            )
          );
          break;
      }
      break;
    case 2:
      produto.listarProdutos();
      break;
    case 3:
      console.log("Digite o id do produto que você deseja consultar:");
      let idConsulta = readlinesync.questionInt("\n");
      produto.consultarProdutos(idConsulta);
      break;
    case 4:
      console.log("\nDigite o id do produto que você deseja atualizar: ");
      let idAtualizacao = readlinesync.questionInt("\n");

      console.log("\nDigite os novos dados do produto");

      console.log(`\nDite o novo nome do Produto: `);
      let novoNomeProduto = readlinesync.question("");

      console.log(`\nDite o preço do Produto: `);
      let novoPrecoProduto = readlinesync.questionFloat("");

      console.log(`\nDite o tipo do Produto: `);
      let novoTipo =
        readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

      switch (novoTipo) {
        case 1:
          console.log(`\nGenerico: `);
          let genericoProduto = readlinesync.question("");

          produto.atualizarProduto(
            idAtualizacao,
            new Medicamento(
              idAtualizacao,
              novoNomeProduto,
              novoPrecoProduto,
              novoTipo,
              genericoProduto
            )
          );
          break;
        case 2:
          console.log(`\nCosmetico: `);
          let cosmeticoProduto = readlinesync.question("");

          produto.atualizarProduto(
            idAtualizacao,
            new Cosmetico(
              idAtualizacao,
              novoNomeProduto,
              novoPrecoProduto,
              novoTipo,
              cosmeticoProduto
            )
          );
          break;
      }
      break;
    case 5:
      console.log("Digite o id do produto que você deseja deletar:");
      let idDeletar = readlinesync.questionInt("\n");
      produto.deletarProduto(idDeletar);
      break;
    case 6:
      console.log("Encerrando o programa...");
      process.exit(0);
    default:
      console.log("Opção invalida!");
      break;
  }
}
