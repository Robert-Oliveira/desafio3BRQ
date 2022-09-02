//Funcao de atualizacao dos event listener
import { PacoteService } from "./service/service.js";
import { PacoteController } from "./controller/controller.js";
const pacoteService = new PacoteService();
const pacoteController = new PacoteController();
window.onload = () => {
    pacoteController.importarDados();
    AtualizarEventListenerCards(1000);
};
let btn_cadastrar = document.querySelector(".btn_cadastrar");
btn_cadastrar.addEventListener("click", (event) => {
    pacoteController.adicionar();
});
let btn_alterar = document.querySelector("#btn_alterar");
btn_alterar.addEventListener("click", (event) => {
    btn_cadastrar.style.display = "block";
    btn_alterar.style.display = "none";
    pacoteController.adicionar();
});
export function AtualizarEventListenerCards(miliseconds) {
    setTimeout(() => {
        var _a, _b;
        let tamanho = document.querySelectorAll(".excluir");
        for (let i = 0; i < tamanho.length; i++) {
            let id = tamanho[i].getAttribute("value");
            let seletor = "#editar" + id.toString();
            (_a = document.querySelector(seletor)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                pacoteController.editar(1, seletor);
                pacoteController.excluir(seletor);
            });
            let seletor1 = "#excluir" + id.toString();
            (_b = document.querySelector(seletor1)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
                pacoteController.excluir(seletor1);
            });
        }
    }, miliseconds);
}
