import { Pacote } from "./model.js";

export class Cadastrados {
  private cadastrados: Pacote[] = [];

  public adiciona(cadastros: Pacote) {
    this.cadastrados.push(cadastros);
  }
  public lista(): ReadonlyArray<Pacote> {
    return [...this.cadastrados];
  }

  public selecionar(seletor: string): Pacote {
    let a = seletor.slice(7);
    let i: number = 0;
    this.cadastrados.map((data, index) => {
      if (data.Id == a) {
        i = index;
      }
    });
    return this.cadastrados[i];
  }
  public excluir(seletor: string): void {
    let a = seletor.slice(8);
    let i: number = 0;
    this.cadastrados.map((data, index) => {
      if (data.Id == a) {
        i = index;
      }
    });
    this.cadastrados.splice(i, 1);
  }

  public criarId() {
    let idNovo: string;
    let maiorId: number = 0;
    this.cadastrados.map((data, index) => {
      if (Number(data.Id) > maiorId) {
        maiorId = Number(data.Id);
      }
    });
    maiorId++;
    return maiorId.toString();
  }
  get data(): Date {
    const data = new Date(this.data.getTime());
    return data;
  }
}
