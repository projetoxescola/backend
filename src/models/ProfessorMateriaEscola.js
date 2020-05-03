const { DataTypes, Model } = require('sequelize');

class ProfessorMateriaEscola extends Model {

    static init(sequelize) {

        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false,
        });

    }

    static association(models) {
        this.belongsToMany(models.Turma, {
            foreignKey: 'professorMateriaEscolaId',
            through: models.TurmaProfessorMateriaEscola,
            as: 'turmaProfessorMateriaEscola'
        });
        this.hasMany(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'professorMateriaEscolaId',
            as: 'turmaProfessorMateria'
        });
        this.belongsTo(models.MateriaEscola, {
            foreignKey: 'materiaEscolaId',
            as: 'materiaProfessor'
        });
    }

}

module.exports = ProfessorMateriaEscola;