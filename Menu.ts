import { read } from "fs";
import { BibliotecaController } from "./src/controller/BibliotecaController";
import { Livro } from "./src/models/Livro";
import { Usuario } from "./src/models/Usuario";
import { colors } from "./src/util/Color";
import readlinesync = require("readline-sync");
import { Console } from "console";

const biblioteca: BibliotecaController = new BibliotecaController();
let idLivro, idUsuario, entrada, tipoConsulta: number;
let tituloLivro: string;

let tipos = ["Por Titulo", "Por Id"];

while (true) {
  console.log(
    colors.fg.magentastrong,
    "***************************************"
  );
  console.log("\nBIBILIOTECA");

  console.log("\nOperações: ");
  console.log("1- Cadastrar livro");
  console.log("2- Remover livro");
  console.log("3- Cadastrar usuário");
  console.log("4- Remover usuário");
  console.log("5- Realizar emprestimo");
  console.log("6- Registrar devolução");
  console.log("7- Verificar a disponibilidade de algum livro");
  console.log("8- Consultar livro");
  console.log("9- Sair");
  console.log("\n***************************************", colors.reset);

  console.log("Digite a operação que deseja realizar: ");
  entrada = readlinesync.questionInt("");

  if (entrada === 9) {
    console.log("Encerrando o programa...");
    finalizar()
    process.exit(0);
  }

  switch (entrada) {
    case 1:
      console.log("Digite o titulo do livro que deseja cadastrar: ");
      tituloLivro = readlinesync.question("", {
        limitMessage: "Digite um nome valido",
      });

      console.log("Digite o autor do livro: ");
      let autorLivro = readlinesync.question("", {
        limitMessage: "Digite um nome valido!",
      });

      console.log("Digite o ano de publicação: ");
      let anoPublicacao = readlinesync.questionInt("", {
        limitMessage: "Digite um ano valido!",
      });

      console.log("Digite o gênero do livro: ");
      let generoLivro = readlinesync.question("", {
        limitMessage: "Digite um genero valido!",
      });

      biblioteca.adicionarLivro(
        new Livro(
          biblioteca.gerarIdLivro(),
          tituloLivro,
          autorLivro,
          anoPublicacao,
          biblioteca.disponibilidade,
          generoLivro
        )
      );

      pressKey();
      break;
    case 2:
      console.log("Digite o id do livro que deseja remover: ");
      idLivro = readlinesync.questionInt("", {
        limitMessage: "Digite um id valido!",
      });

      biblioteca.removerLivro(idLivro);

      pressKey();
      break;
    case 3:
      console.log("Digite o nome do usuário que deseja registrar: ");
      let nomeUsuario = readlinesync.question("", {
        limitMessage: "Digite um nome valido",
      });

      console.log("Digite o email do usuário: ");
      let emailUsuario = readlinesync.question("", {
        limitMessage: "Digite um email valido!",
      });

      console.log("Digite o telefone do usuário: ");
      let telUsuario = readlinesync.questionInt("", {
        limitMessage: "Digite um numero valido!",
      });

      biblioteca.cadastrarUsuario(
        new Usuario(
          biblioteca.gerarIdUsuario(),
          nomeUsuario,
          emailUsuario,
          telUsuario
        )
      );

      pressKey();
      break;
    case 4:
      console.log("Digite o id do usuario que deseja remover: ");
      idUsuario = readlinesync.questionInt("", {
        limitMessage: "Digite um id valido!",
      });

      biblioteca.removerUsuario(idUsuario);

      pressKey();
      break;
    case 5:
      console.log("Digite o id do livro que deseja realizar o emprestimo: ");
      idLivro = readlinesync.questionInt("");

      console.log("Digite o id do usuário que deseja realizar o emprestimo: ");
      idUsuario = readlinesync.questionInt("");

      console.log("Digite o a data do emprestimo: ");
      let dataEmprestimo = readlinesync.question("");

      biblioteca.realizarEmprestimo(idLivro, idUsuario, dataEmprestimo);

      pressKey();
      break;
    case 6:
      console.log("Digite o id do livro que deseja realizar o emprestimo: ");
      idLivro = readlinesync.questionInt("");

      console.log("Digite o id do usuário que deseja realizar o emprestimo: ");
      idUsuario = readlinesync.questionInt("");

      console.log("Digite o a data do emprestimo: ");
      let dataDevolucao = readlinesync.question("");

      biblioteca.registrarDevolucao(idLivro, idUsuario, dataDevolucao);

      pressKey();
      break;
    case 7:
      console.log(
        "Digite o id do livro que deseja verificar a disponibilidade: "
      );

      idLivro = readlinesync.questionInt("", {
        limitMessage: "Digite um id valido",
      });

      biblioteca.verificarDisponibilidade(idLivro);

      pressKey();
      break;
    case 8:
      console.log("Você deseja consultar o livro por: ");

      tipoConsulta = readlinesync.keyInSelect(tipos, "", { cancel: false }) + 1;

      switch (tipoConsulta) {
        case 1:
          console.log("Digite o titulo do livro: ");
          tituloLivro = readlinesync.question("", {
            limitMessage: "Digite um titulo valido!",
          });

          biblioteca.consultarLivro(tituloLivro);
          break;
        case 2:
          console.log("Digite o id do livro: ");
          idLivro = readlinesync.questionInt("", {
            limitMessage: "Digite um id valido!",
          });

          biblioteca.consultarLivro(idLivro);
          break;
      }
      break;
    default:
      console.log("Operação inválida, tente novamente!");

      pressKey();
      break;
  }
}

function finalizar(){
  console.log('****************************************************')
  console.log('BIBLIOTECA CASSIO - TORNANDO A EDUCAÇÃO UM DIREITO :)')
  console.log('****************************************************')
  console.log('Programa desenvolvido por: Fernando Cassio')
  console.log('EMAIL: FERNANDOCASSIODEV@GMAIL.COM')
  console.log('****************************************************')
}

function pressKey() {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
