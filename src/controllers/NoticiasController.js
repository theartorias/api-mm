const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        const noticias = await connection('Noticias').select('*');
        return response.json(noticias);
},
    async create(request, response){

        const {idNoticias, titulo, subtitulo, corpo, diahora, likes} = request.body;

        const id = await connection('Noticias').insert({
            idNoticias,
            titulo,
            subtitulo,
            corpo,
            diahora,
            likes
         }, )
         return response.json(id[0]);
    }
};