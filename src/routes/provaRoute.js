const route = require('express').Router();

const provaController = require('../controllers/ProvaController');

route.post('/', provaController.cadastrar);

route.put('/:id', provaController.atualizar);

route.get('/:id', provaController.buscarProvaId);
route.get('/aluno/:id_aluno', provaController.buscarAlunoId);
route.get('/professor/:id_professor', provaController.buscarProfessorId);
route.get('/turma/:id_turma', provaController.buscarTurmaId);
route.get('/materia/:id_materia', provaController.buscarMateriaId);

module.exports = route;