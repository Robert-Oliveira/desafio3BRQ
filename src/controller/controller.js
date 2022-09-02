import { Pacote } from "./../model/model.js";
import { Cadastrados } from "./../model/cadastrados.js";
import { PacoteService } from "../service/service.js";
import { PacotesView } from "../view/view.js";
import { AtualizarEventListenerCards } from "../app.js";
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
        this.btnAlterar = document.querySelector("#btn_alterar");
        this.btnCadastrar = document.querySelector("#btn_cadastrar");
    }
    // cadastra novos pacotes
    adicionar() {
        const cadastrar = Pacote.criaDados(this.inputNome.value, this.valorSelect(this.inputStatus), this.inputData.value, this.textAreaDescricao.value, this.cadastrados.criarId());
        this.cadastrados.adiciona(cadastrar);
        this.limparFormulario();
        AtualizarEventListenerCards(500);
        this.pacotesView.update(this.cadastrados);
    }
    //Funcao editar pacote
    editar(etapa, seletor) {
        //pegar os dados e colocar na tela
        if (etapa == 1 && seletor) {
            const cadastrados = this.cadastrados.selecionar(seletor);
            this.inputNome.value = cadastrados.Nome;
            this.textAreaDescricao.value = cadastrados.Descricao;
            this.inputData.value = this.dataTexto(cadastrados.Data);
            // this.id.value = cadastrados.Id.toString();
            console.log("criar codigo do status");
            window.scrollTo(0, 0);
            this.btnCadastrar.style.display = "none";
            this.btnAlterar.style.display = "block";
        }
        else if (etapa == 2) {
            //gravar a informacao e excluir a anterior
            this.excluir(seletor);
            this.adicionar();
        }
        AtualizarEventListenerCards(1000);
        this.pacotesView.update(this.cadastrados);
    }
    // Excluir itens
    selecionar(seletor) {
        const cadastrados = this.cadastrados.selecionar(seletor);
        return cadastrados;
    }
    excluir(seletor) {
        this.cadastrados.excluir(seletor);
        AtualizarEventListenerCards(1000);
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
    limparFormulario() {
        this.inputNome.value = "";
        this.inputStatus.value = "";
        this.inputData.value = "";
        this.textAreaDescricao.value = "";
        this.inputNome.focus();
    }
    dataTexto(data) {
        let dataDate = new Date(data);
        let dataString;
        let mes = dataDate.getMonth() < 10
            ? "0" + dataDate.getMonth().toString()
            : dataDate.getMonth().toString(); //tratamento do texto mes <q 10
        dataString =
            dataDate.getFullYear().toString() +
                "-" +
                mes +
                "-" +
                dataDate.getDate().toString();
        return dataString;
    }
}
