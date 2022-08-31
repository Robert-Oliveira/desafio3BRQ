export class Pacote {
    constructor(_id, _nome, _descricao, _data, _status) {
        this.pacotes = [];
        this.id = _id;
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
    }
    adiciona(pacote) {
        this.pacotes.push(pacote);
    }
    lista() {
        return [...this.pacotes];
    }
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(value) {
        this.nome = value;
    }
    get Descricao() {
        return this.descricao;
    }
    set Descricao(value) {
        this.descricao = value;
    }
    get Data() {
        return this.data;
    }
    set Data(value) {
        this.data = value;
    }
    get Status() {
        return this.status;
    }
    set Status(value) {
        this.status = value;
    }
}
