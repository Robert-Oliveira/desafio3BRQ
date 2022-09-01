import { PacoteService } from "./service/service.js";
import { PacoteController } from "./controller/controller.js";
const pacoteService = new PacoteService();
const pacoteController = new PacoteController();
window.onload = () => {
  pacoteController.importarDados();
};

let btn_cadastrar = document.querySelector(".btn_cadastrar");
btn_cadastrar.addEventListener("click", (event) => {
  pacoteController.adicionar();
});
