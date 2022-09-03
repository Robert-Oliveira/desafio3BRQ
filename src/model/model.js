export class Pacote {
    constructor(_nome, _status, _data, _descricao, _id) {
        this.id = _id;
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
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
    static criaDados(nomeString, statusString, dataString, descricaoString, idString) {
        const nomePacote = nomeString;
        const statusPacote = statusString;
        const exp = "-";
        const dataPacote = dataString;
        new Date(dataString.replace(exp, "/"));
        const textArea = descricaoString;
        const idPacote = idString;
        return new Pacote(nomePacote, statusPacote, dataPacote, textArea, idPacote);
    }
    dataTexto(data) {
        let newDate = new Date(data);
        let dataString;
        dataString =
            newDate.getDate().toString().padStart(2, "0") +
                "/" +
                (newDate.getMonth() + 1).toString().padStart(2, "0") +
                "/" +
                newDate.getFullYear().toString();
        return dataString;
    }
}
