import { Pacote } from "./model.js";

export class Cadastrados {
  private cadastrados: Pacote[] = [];

  public adiciona(cadastros: Pacote) {
    this.cadastrados.push(cadastros);
  }
  public lista(): ReadonlyArray<Pacote> {
    return [...this.cadastrados];
  }
  get data(): Date {
    const data = new Date(this.data.getTime()); //Cria uma variavel que recebe o valor, e se apessoa tentar modificar não vai achar a vairavel
    return data;
  }
}
