export class Cadastrados {
    constructor() {
        this.cadastrados = [];
    }
    adiciona(cadastros) {
        this.cadastrados.push(cadastros);
    }
    lista() {
        return [...this.cadastrados];
    }
    get data() {
        const data = new Date(this.data.getTime()); //Cria uma variavel que recebe o valor, e se apessoa tentar modificar não vai achar a vairavel
        return data;
    }
}
