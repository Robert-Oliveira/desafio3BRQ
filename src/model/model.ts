export class Pacote {
  private id: string;
  private nome: string;
  private descricao: string;
  private data: string;
  private status: boolean;

  private pacotes: Pacote[] = [];

  adiciona(pacote: Pacote) {
    this.pacotes.push(pacote);
  }

  lista(): ReadonlyArray<Pacote> {
    return [...this.pacotes];
  }
  constructor(
    _id: string,
    _nome: string,
    _descricao: string,
    _data: string,
    _status: boolean
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
  public get Status(): boolean {
    return this.status;
  }
  public set Status(value: boolean) {
    this.status = value;
  }
}
