import { Pacote } from "../model/model.js";
let desc = document.querySelector(".desc");
export class PacoteService {
    obterPacotes() {
        return fetch("https://62361b7feb166c26eb2f488a.mockapi.io/pacotes")
            .then((res) => res.json()) //recebeu os dados e converte para json
            .then((dados) => {
            //Array<any>)=>{funciona mas nao garante o nome da variaveis dados pela interface
            return dados.map((dadoPacote) => {
                //pega os dados de hoje e converte um novo array do tipo negociacao
                return new Pacote(dadoPacote.nome, dadoPacote.status, dadoPacote.data, dadoPacote.descricao, dadoPacote.id);
            });
        });
    }
}
// const fetchSyncTur = () => {
//   const promises: Array<any> = [];
//   const url = "https://62361b7feb166c26eb2f488a.mockapi.io/pacotes";
//   promises.push(fetch(url).then((response) => response.json()));
//   Promise.all(promises).then((results) => {
//     const data = results.map((results) => {
//       nome: results.nome;
//       descricao: results.descricao;
//       data: results.data;
//       status: results.status;
//       id: results.id;
//       console.log(results);
//     });
//     displaySyncTur(data);
//     console.log(data);
//   });
// };
// const displaySyncTur = (data: any) => {
//   const dataHTMLString = data.map((data: any) => `<h2>${data}</h2>`);
//   desc.innerHTML = dataHTMLString;
//   console.log(desc);
// };
// fetchSyncTur();
