import { Pacote } from "./../model/model.js";
import { Cadastrados } from "./../model/cadastrados.js";
import { PacoteService } from "../service/service.js";
import { PacotesView } from "../view/view.js";
import { AtualizarEventListenerCards } from "../app.js";

export class PacoteController {
  private inputNome: HTMLInputElement;
  private inputStatus: any;
  private inputData: HTMLInputElement;
  private textAreaDescricao: HTMLInputElement;
  private id: any;

  private btnAlterar: HTMLButtonElement;
  private btnCadastrar: HTMLButtonElement;

  private pacoteService = new PacoteService();
  private cadastrados = new Cadastrados();
  private pacotesView = new PacotesView("#lista");

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

    this.btnAlterar = document.querySelector(
      "#btn_alterar"
    ) as HTMLButtonElement;

    this.btnCadastrar = document.querySelector(
      "#btn_cadastrar"
    ) as HTMLButtonElement;
  }

  // cadastra novos pacotes
  public adicionar(): void {
    const cadastrar = Pacote.criaDados(
      this.inputNome.value,
      this.valorSelect(this.inputStatus),
      this.inputData.value,
      this.textAreaDescricao.value,
      this.cadastrados.criarId()
    );
    this.cadastrados.adiciona(cadastrar);
    this.limparFormulario();
    AtualizarEventListenerCards(500);
    this.pacotesView.update(this.cadastrados);
  }

  //Funcao editar pacote
  editar(etapa: number, seletor: string) {
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
    } else if (etapa == 2) {
      //gravar a informacao e excluir a anterior
      this.excluir(seletor);
      this.adicionar();
    }
    AtualizarEventListenerCards(1000);
    this.pacotesView.update(this.cadastrados);
  }

  // Excluir itens
  selecionar(seletor: string): Pacote {
    const cadastrados = this.cadastrados.selecionar(seletor);
    return cadastrados;
  }

  excluir(seletor: string) {
    this.cadastrados.excluir(seletor);

    AtualizarEventListenerCards(1000);
    this.pacotesView.update(this.cadastrados);
  }
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

  private limparFormulario(): void {
    this.inputNome.value = "";
    this.inputStatus.value = "";
    this.inputData.value = "";
    this.textAreaDescricao.value = "";
    this.inputNome.focus();
  }

  protected dataTexto(data: string): string {
    let dataDate = new Date(data);
    let dataString: string;

    let mes =
      dataDate.getMonth() < 10
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
