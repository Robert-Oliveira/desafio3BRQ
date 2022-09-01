export class Pacote {
  private nome: string;
  private status: string;
  private data: string;
  private descricao: string;
  private id: string;

  constructor(
    _nome: string,
    _status: string,
    _data: string,
    _descricao: string,
    _id: string
  ) {
    this.id = _id;
    this.nome = _nome;
    this.descricao = _descricao;
    this.data = _data;
    this.status = _status;
  }
  public get Id(): string {
    return this.id;
  }
  public set Id(value: string) {
    this.id = value;
  }

  public get Nome(): string {
    return this.nome;
  }
  public set Nome(value: string) {
    this.nome = value;
  }
  public get Descricao(): string {
    return this.descricao;
  }
  public set Descricao(value: string) {
    this.descricao = value;
  }
  public get Data(): string {
    return this.data;
  }
  public set Data(value: string) {
    this.data = value;
  }
  public get Status(): string {
    return this.status;
  }
  public set Status(value: string) {
    this.status = value;
  }

  public static criaDados(
    nomeString: string,
    statusString: string,
    dataString: string,
    descricaoString: string,
    idString: string
  ): Pacote {
    const nomePacote = nomeString;
    const statusPacote = statusString;
    const exp = "-";
    const dataPacote = dataString;
    new Date(dataString.replace(exp, "/"));
    const textArea = descricaoString;

    const idPacote = idString;
    return new Pacote(nomePacote, statusPacote, dataPacote, textArea, idPacote);
  }

  public dataTexto(data: string): string {
    let newDate = new Date(data);
    console.log(newDate);

    let dataString: string;
    dataString =
      newDate.getDate().toString() +
      "/" +
      newDate.getMonth().toString() +
      "/" +
      newDate.getFullYear().toString();
    return dataString;
  }
}
