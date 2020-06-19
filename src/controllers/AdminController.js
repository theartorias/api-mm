const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        const {login, senha} = request.body;

        

        const result = await connection('admin').where({
            login: (login),
            senha: (senha)
        }).select('token', 'login');
        return response.json(result);
},
    async authadm(request, response) {
        const {login} = request.body;
        var aux = login;

        

        const result = await connection('admin').where({
            login: (aux),
        }).select('token');
        return response.json(result);
}

};