//Funcao de atualizacao dos event listener
import { PacoteService } from "./service/service.js";
import { PacoteController } from "./controller/controller.js";
const pacoteService = new PacoteService();
const pacoteController = new PacoteController();

// chama a lista e atualiza a pagina quando ela é aberta
window.onload = () => {
  pacoteController.importarDados();
  AtualizarEventListenerCards(1000);
};
// botão cadastrar com a função de adicionar
let btn_cadastrar = document.querySelector(".btn_cadastrar") as HTMLElement;
btn_cadastrar.addEventListener("click", (event) => {
  pacoteController.adicionar();
});
// botão para salvar as alterações e trocar os botões
let btn_alterar = document.querySelector("#btn_alterar") as HTMLElement;
btn_alterar.addEventListener("click", (event) => {
  btn_cadastrar.style.display = "block";
  btn_alterar.style.display = "none";
  pacoteController.adicionar();
});

// função que incluir o evento listener dentro dos botões editar e excluir depois que eles forem criados
export function AtualizarEventListenerCards(miliseconds: number) {
  setTimeout(() => {
    let tamanho = document.querySelectorAll(".excluir");

    for (let i = 0; i < tamanho.length; i++) {
      let id = tamanho[i].getAttribute("value") as string;

      let seletor = "#editar" + id.toString();
      document.querySelector(seletor)?.addEventListener("click", () => {
        pacoteController.editar(1, seletor);
        pacoteController.excluir(seletor);
      });
      let seletor1 = "#excluir" + id.toString();
      document.querySelector(seletor1)?.addEventListener("click", () => {
        pacoteController.excluir(seletor1);
      });
    }
  }, miliseconds);
}
