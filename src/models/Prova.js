const { Model, DataTypes } = require('sequelize');

class Prova extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            peso: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            
        },
        {
            sequelize,
            createdAt: 'dataCriacao',
            updatedAt: 'dataAtualizacao',
        });
    }

    static association(models) {
        this.belongsTo(models.AlunoTurma, {
            foreignKey: 'alunoTurmaId',
            as: 'ProvaAlunoTurma',
        });
        this.belongsTo(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'turmaProfessorMateriaEscolaId',
            as: 'provaTurmaProfessorMateriaEscola'
        });
    }

}

module.exports = Prova;