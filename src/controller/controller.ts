import { Pacote } from "./../model/model.js";
import { Cadastrados } from "./../model/cadastrados.js";
import { PacoteService } from "../service/service.js";
import { PacotesView } from "../view/view.js";

export class PacoteController {
  private inputNome: HTMLInputElement;
  private inputStatus: any;
  private inputData: HTMLInputElement;
  private textAreaDescricao: HTMLInputElement;
  private id: any;
  constructor() {
    this.inputNome = document.querySelector(
      ".input-nome-pacote"
    ) as HTMLInputElement;
    this.inputStatus = document.getElementsByName("status") as any;
    this.inputData = document.querySelector("#date") as HTMLInputElement;
    this.textAreaDescricao = document.querySelector(
      ".pacote-descricao"
    ) as HTMLInputElement;
    this.id;
    this.importarDados;
  }

  public adicionar(): void {
    console.log(this.inputData.value);
    console.log(this.valorSelect(this.inputStatus));
    console.log(this.inputNome.value);
    console.log(this.textAreaDescricao.value);
    const cadastrar = Pacote.criaDados(
      this.inputNome.value,
      this.valorSelect(this.inputStatus),
      this.inputData.value,
      this.textAreaDescricao.value,
      this.id
    );
    this.cadastrados.adiciona(cadastrar);
    this.pacotesView.update(this.cadastrados);
  }

  private pacoteService = new PacoteService();
  private cadastrados = new Cadastrados();
  private pacotesView = new PacotesView("#lista");

  public importarDados() {
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

  private valorSelect(status: any): string {
    status = this.inputStatus;
    for (let i = 0; i < status.length; i++) {
      if (status[i].checked) {
        return (status = status[i].value);
      }
    }
    return status;
  }
}
