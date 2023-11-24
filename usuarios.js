'use strict'

async function listarUsuarios () {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch (url)
    const data = await response.json()
    console.log (data)
    return data
}

async function cadastrarUsusario (usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch (url, options)
    console.log (response.ok)
    return response.ok
}

async function atualizarUsuario (usuario) {
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    
    const response = await fetch (url, options)
    console.log(response.ok)
    return response.ok
}

async function deletarUsuario (id) {
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}


//Area de teste

//deletarUsuario(178)

//const usuarioAtualizado = {
    //id: 100,
    //nome: 'Eduardo Vilas Boas',
    //email: 'dudu@batata.com'
//}

//atualizarUsuario(usuarioAtualizado)

//const novoUsuario = {
    //nome: 'Eduardo',
    //email: 'batata@gmail.com'
//}

//cadastrarUsusario(novoUsuario)
//listarUsuarios()