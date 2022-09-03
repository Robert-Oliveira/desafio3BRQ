import { DadosDoPacote } from "../interface/interface.js";
import { Pacote } from "../model/model.js";

export class PacoteService {
  // fetch para buscar os dados da api transformar em objetos
  public obterPacotes(): Promise<Pacote[]> {
    return fetch("https://62361b7feb166c26eb2f488a.mockapi.io/pacotes")
      .then((res) => res.json()) //recebeu os dados e converte para json
      .then((dados: DadosDoPacote[]) => {
        return dados.map((dadoPacote) => {
          return new Pacote(
            dadoPacote.nome,
            dadoPacote.status,
            dadoPacote.data,
            dadoPacote.descricao,
            dadoPacote.id
          );
        });
      });
  }
}
