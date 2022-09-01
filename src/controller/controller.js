import { Pacote } from "./../model/model.js";
import { Cadastrados } from "./../model/cadastrados.js";
import { PacoteService } from "../service/service.js";
import { PacotesView } from "../view/view.js";
export class PacoteController {
    constructor() {
        this.pacoteService = new PacoteService();
        this.cadastrados = new Cadastrados();
        this.pacotesView = new PacotesView("#lista");
        this.inputNome = document.querySelector(".input-nome-pacote");
        this.inputStatus = document.getElementsByName("status");
        this.inputData = document.querySelector("#date");
        this.textAreaDescricao = document.querySelector(".pacote-descricao");
        this.id;
        this.importarDados;
    }
    adicionar() {
        console.log(this.inputData.value);
        console.log(this.valorSelect(this.inputStatus));
        console.log(this.inputNome.value);
        console.log(this.textAreaDescricao.value);
        const cadastrar = Pacote.criaDados(this.inputNome.value, this.valorSelect(this.inputStatus), this.inputData.value, this.textAreaDescricao.value, this.id);
        this.cadastrados.adiciona(cadastrar);
        this.pacotesView.update(this.cadastrados);
    }
    importarDados() {
        this.pacoteService
            .obterPacotes() //retora uma lista de negociacao
            .then((pacotesApi) => {
            for (let pacote of pacotesApi) {
                //validar a repeticao da lista
                this.cadastrados.adiciona(pacote);
            }
            this.pacotesView.update(this.cadastrados);
        });
    }
    valorSelect(status) {
        status = this.inputStatus;
        for (let i = 0; i < status.length; i++) {
            if (status[i].checked) {
                return (status = status[i].value);
            }
        }
        return status;
    }
}
