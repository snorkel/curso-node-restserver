const {
    response,
    request
} = require('express');

const usuariosGet = (req = request, res = response) => {
    const params = req.query;
    res.json({
        msg: 'get Api - controlador',
        params
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put Api - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
    const {
        nombre,
        edad
    } = req.body;

    res.json({
        msg: 'post Api - Controlador',
        nombre: nombre,
        edad: edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api = Controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}