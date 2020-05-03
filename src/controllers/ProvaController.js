const Prova = require('../models/Prova');
const AlunoTurma = require('../models/AlunoTurma');
const TurmaProfessorMateriaEscola = require('../models/TurmaProfessorMateriaEscola');

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
        const { alunoTurmaId, turmaProfessorMateriaEscolaId, peso } = req.body;
        
        const alunoTurma = await AlunoTurma.findByPk(alunoTurmaId);
        const turmaProfessorMateriaEscola = 
            await TurmaProfessorMateriaEscola.findByPk(turmaProfessorMateriaEscolaId);

        if(!alunoTurma)
            return res.status(400).json({ 'erro':'AlunoTurma não encontrado' });

        if(!turmaProfessorMateriaEscola)
            return res.status(400).json({ 'erro':'turmaProfessorMateriaEscola não encontrado' });

        const prova = await Prova.create({
            peso
        });

        await prova.setProvaAlunoTurma(alunoTurma);
        await prova.setProvaTurmaProfessorMateriaEscola(turmaProfessorMateriaEscola);

        return res.status(200).json(prova);

    },

    async atualizar(req, res) {
        const { id } = req.params;
        let { peso, alunoTurmaId, turmaProfessorMateriaEscolaId } = req.body;

        const alunoTurma = await AlunoTurma.findByPk(alunoTurmaId);
        const turmaProfessorMateriaEscola = 
            await TurmaProfessorMateriaEscola.findByPk(turmaProfessorMateriaEscolaId);
        
        if(!alunoTurma)
            return res.status(400).json({ 'erro':'AlunoTurma não encontrado' });

        if(!turmaProfessorMateriaEscola)
            return res.status(400).json({ 'erro':'turmaProfessorMateriaEscola não encontrado' });

        const provaAtualizado = await Prova.update({
            peso
        }, {
            where: {
                id,
            }
        });

        let prova = await Prova.findByPk(id)

        if(!prova)
            return res.status(400).json({ 'erro':'Prova não encontrada' });

        if(!provaAtualizado[0])
            return res.status(400).json({ 'erro':'Prova Nao Atulizada' });

        await prova.setProvaAlunoTurma(alunoTurma);
        await prova.setProvaTurmaProfessorMateriaEscola(turmaProfessorMateriaEscola);

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
            alunoId: id_aluno
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
            turmaId: id_turma,
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
                professorId: id_professor
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
                    materiaId: id_materia
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