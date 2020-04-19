const Prova = require('../models/Prova');

const alunoTurmaAssociate = (params) => {

    return {
        association: 'ProvaAlunoTurma',
        where: params,
    }
}

const ProfessorMateriaEscolaAssociate = (params) => {

    return {
        
        association: 'provaTurmaProfessorMateriaEscola',
        include: {
            association: 'turmaProfessorMateria',
            ...params,
            required: true
        },
        required: true,
        attributes: []
    }

}

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

        const params = {
            idAluno: id_aluno
        };

        const provas = await Prova.findAll({
            include:[
                alunoTurmaAssociate(params)
            ]
        });

        if(provas.length == 0)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        return res.status(200).json(provas);
          
    },

    async buscarTurmaId(req, res) {
        const { id_turma } = req.params;

        const params = {
            idTurma: id_turma,
        }

        const provas = await Prova.findAll({
            include:[
                alunoTurmaAssociate(params),
            ]
        });

        if(provas.length == 0)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        return res.status(200).json(provas);

    },

    async buscarProfessorId(req, res) {
        const { id_professor } = req.params;

        const params = {
            where: {
                idProfessor: id_professor
            }
        }

        const provas = await Prova.findAll({
            include: [
                ProfessorMateriaEscolaAssociate(params),
            ]
        });

        if(provas.length == 0)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        return res.status(200).json(provas);

    },

    async buscarMateriaId(req, res) {
        const { id_materia } = req.params;

        const params = {
            include: {
                association: 'materiaProfessor',
                where: {
                    idMateria: id_materia
                },
            }
        }

        const provas = await Prova.findAll({
            include: [
                ProfessorMateriaEscolaAssociate(params),
            ]
        });

        if(provas.length == 0)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        return res.status(200).json(provas);

    },

}