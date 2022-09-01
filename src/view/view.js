export class PacotesView {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        this.elemento = elemento;
    }
    template(model) {
        return model
            .lista()
            .map((pacote) => {
            return `
          <div class="list-card">
              <h2>${pacote.Nome}</h2>
              <p>${pacote.Descricao}</p>
              <p>Data da viagem: ${pacote.dataTexto(pacote.Data)}
              <div class="list-btn">
                  <button class="editar" id="editar${pacote.Id}" value="${pacote.Id}">Editar</button>
                  <button class="excluir" id="excluir${pacote.Id}" value="${pacote.Id}">Excluir</button>
              </div>
          </div>         
      `;
        })
            .join();
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    dataTexto(data) {
        let dataString;
        dataString =
            data.getDate().toString() +
                "/" +
                data.getMonth().toString() +
                "/" +
                data.getFullYear().toString();
        return dataString;
    }
}
