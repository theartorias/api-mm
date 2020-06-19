const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        const cursos = await connection('Cursos').select('*');
        return response.json(cursos);
},
    async create(request, response){

        const {idCursos, nome, minidescritivo, link, Categorias_idCategorias} = request.body;

        const id = await connection('Cursos').insert({
             idCursos,
             nome,
             minidescritivo,
             link,
             Categorias_idCategorias,
         }, )
         return response.json(id[0]);
    }
};