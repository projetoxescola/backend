const { Model, DataTypes } = require('sequelize');

class Prova extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            idTurmaProfessorMateriaEscola: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            peso: {
                type: DataTypes.DOUBLE,
                allowNull: false
            }
        },
        {
            sequelize,
            createdAt: 'dataCriacao',
            updatedAt: 'dataAtualizacao',
        });
    }

    static association(models) {
        this.belongsTo(models.AlunoTurma, {
            foreignKey: 'idAlunoTurma',
            as: 'ProvaAlunoTurma',
        });
        this.belongsTo(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'idTurmaProfessorMateriaEscola',
            as: 'provaTurmaProfessorMateriaEscola'
        });
    }

}

module.exports = Prova;