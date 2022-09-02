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
    selecionar(seletor) {
        let a = seletor.slice(7);
        let i = 0;
        this.cadastrados.map((data, index) => {
            if (data.Id == a) {
                i = index;
            }
        });
        return this.cadastrados[i];
    }
    excluir(seletor) {
        let a = seletor.slice(8);
        let i = 0;
        this.cadastrados.map((data, index) => {
            if (data.Id == a) {
                i = index;
            }
        });
        this.cadastrados.splice(i, 1);
    }
    criarId() {
        let idNovo;
        let maiorId = 0;
        this.cadastrados.map((data, index) => {
            if (Number(data.Id) > maiorId) {
                maiorId = Number(data.Id);
            }
        });
        maiorId++;
        return maiorId.toString();
    }
    get data() {
        const data = new Date(this.data.getTime());
        return data;
    }
}
