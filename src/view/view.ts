import { Cadastrados } from "../model/cadastrados.js";

export class PacotesView {
  private elemento: HTMLElement;
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    this.elemento = elemento as HTMLElement;
  }
  protected template(model: Cadastrados): string {
    return model
      .lista()
      .map((pacote) => {
        return `
          <div class="list-card">
              <h2>${pacote.Nome}</h2>
              <p>${pacote.Descricao}</p>
              <p>Data da viagem: ${pacote.dataTexto(pacote.Data)}
              <div class="list-btn">
                  <button class="editar" id="editar${pacote.Id}" value="${
          pacote.Id
        }">Editar</button>
                  <button class="excluir" id="excluir${pacote.Id}" value="${
          pacote.Id
        }">Excluir</button>
              </div>
          </div>         
      `;
      })
      .join();
  }

  update(model: Cadastrados) {
    this.elemento.innerHTML = this.template(model);
  }
  protected dataTexto(data: Date): string {
    let dataString: string;
    dataString =
      data.getDate().toString() +
      "/" +
      data.getMonth().toString() +
      "/" +
      data.getFullYear().toString();
    return dataString;
  }
}
