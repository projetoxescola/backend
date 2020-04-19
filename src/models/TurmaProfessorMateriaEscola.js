const { DataTypes, Model } = require('sequelize');

class TurmaProfessorMateriaEscola extends Model {

    static init(sequelize){

        super.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            ativo: {
                type: DataTypes.BOOLEAN,
            }
        },
        {
            sequelize,
            timestamps: false,
        });

    }

    static association(models) {
        this.hasMany(models.Prova, {
            foreignKey: 'idTurmaProfessorMateriaEscola',
            as: 'provaTurmaProfessorMateriaEscola'
        });
        this.belongsTo(models.Turma, {
            foreignKey: 'idTurma',
            as: 'professorTurma'
        });
        this.belongsTo(models.ProfessorMateriaEscola, {
            foreignKey: 'idProfessorMateriaEscola',
            as: 'turmaProfessorMateria'
        });
    }

}

module.exports = TurmaProfessorMateriaEscola;