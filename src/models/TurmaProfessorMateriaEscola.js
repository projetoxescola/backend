const { DataTypes, Model } = require('sequelize');

class TurmaProfessorMateriaEscola extends Model {

    static init(sequelize){

        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
            foreignKey: 'turmaProfessorMateriaEscolaId',
            as: 'provaTurmaProfessorMateriaEscola'
        });
        this.belongsTo(models.Turma, {
            foreignKey: 'turmaId',
            as: 'professorTurma'
        });
        this.belongsTo(models.ProfessorMateriaEscola, {
            foreignKey: 'professorMateriaEscolaId',
            as: 'turmaProfessorMateria'
        });
    }

}

module.exports = TurmaProfessorMateriaEscola;