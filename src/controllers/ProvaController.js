const Prova = require('../models/Prova');

module.exports = {

    async cadastrar(req, res) {
        const prova = req.body;

        const cadastro = await Prova.create(prova);

        return res.status(200).json(cadastro);

    },

    async atualizar(req, res) {
        const { id } = req.params;
        let prova = req.body;

        const provaAtualizado = await Prova.update(prova, {
            where: {
                id,
            }
        });

        if(!provaAtualizado[0])
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        prova = {id, ...prova};

        return res.status(200).json(prova);

    },

    async buscarProvaId(req, res) {
        const { id } = req.params;

        const prova = await Prova.findByPk(id);

        if(!prova)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        return res.status(200).json(prova);

    },

    async buscarAlunoId(req, res) {
        const { id_aluno } = req.params;
          
    },

    async buscarTurmaId(req, res) {

    },

    async buscarProfessorId(req, res) {

    },

    async buscarMateriaId(req, res) {
        
    },

}