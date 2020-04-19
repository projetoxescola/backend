const { DataTypes, Model } = require('sequelize');

class ProfessorMateriaEscola extends Model {

    static init(sequelize) {

        super.init({
            id: {
                type: DataTypes.BIGINT,
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
            foreignKey: 'idProfessorMateriaEscola',
            through: models.TurmaProfessorMateriaEscola,
            as: 'turmaProfessorMateriaEscola'
        });
        this.hasMany(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'idProfessorMateriaEscola',
            as: 'turmaProfessorMateria'
        });
        this.belongsTo(models.MateriaEscola, {
            foreignKey: 'idMateriaEscola',
            as: 'materiaProfessor'
        });
    }

}

module.exports = ProfessorMateriaEscola;