const Sequelize = require('sequelize');

const dbConfig = require('../config/databaseConfig');

const connection = new Sequelize(dbConfig);

const AlunoTurma = require('../models/AlunoTurma');
const Materia = require('../models/Materia');
const MateriaEscola = require('../models/MateriaEscola');
const ProfessorMateriaEscola = require('../models/ProfessorMateriaEscola');
const Prova = require('../models/Prova');
const Turma = require('../models/Turma');
const TurmaProfessorMateriaEscola = require('../models/TurmaProfessorMateriaEscola');

//Inits dos models
AlunoTurma.init(connection);
Materia.init(connection);
MateriaEscola.init(connection);
ProfessorMateriaEscola.init(connection);
Prova.init(connection);
Turma.init(connection);
TurmaProfessorMateriaEscola.init(connection);


//Assosiations (associações de tabelas)
AlunoTurma.association(connection.models);
Materia.association(connection.models);
MateriaEscola.association(connection.models);
ProfessorMateriaEscola.association(connection.models);
Prova.association(connection.models);
Turma.association(connection.models);
TurmaProfessorMateriaEscola.association(connection.models);

module.exports = connection;