const Contato = require("./modelo")

const Contatos = [];

function adicionarcontatos(nome, email, telefone){
    const NovoContato = {nome, email, telefone}
  Contatos.push(NovoContato);
}
function listarcontatos() {
    return Contatos
}
function buscarcontatos() {
  const Buscar = contatos.find(contato => contato.nome === nome)
  return Buscar
}
function atualizarcontatos(nome, email, telefone) {
const Buscar = buscarcontatos(nome)
if (Buscar) {
    Buscar.email = email
    Buscar.telefone = telefone;
}
}
function removercontatos(nome) {
    const Posicao = Contatos.findIndex((Contato)=> Contato.nome === nome)
    if (Posicao >= 0) {
        Contatos.splice(Posicao, 1);
    }
}
module.exports = {adicionarcontatos, listarcontatos, buscarcontatos, atualizarcontatos, removercontatos};