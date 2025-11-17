import axios from "axios";

//Instância do Axios
const api = axios.create({
    baseURL: 'https://blogpessoal-tdix.onrender.com'

})

// Função Cadastrar Usuario
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);

    //Função para logar Usuário    
}
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// Função para consultar token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);

}

// Função de cadastro com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);

}

// Função para atualizar token

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
}
// Função para deletar token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}