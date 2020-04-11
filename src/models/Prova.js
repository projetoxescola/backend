const { Model, DataTypes } = require('sequelize');

class Prova extends Model {

    static init(sequelize) {
        super.init({
            idTurmaProfessorMateriaEscola: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            alunoTurma: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Atualizacao: {
                type: DataTypes.DATE,
                allowNull: false
            },
            peso: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            }
        },
        {
            sequelize
        });
    }

}

module.exports = Prova;