const { DataTypes, Model } = require('sequelize');

class MateriaEscola extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            }
        },
        {
            sequelize,
            timestamps: false
        });
    }

    static association(models) {
        this.hasMany(models.ProfessorMateriaEscola, {
            foreignKey: 'idMateriaEscola',
            as: 'materiaProfessor'
        });
    }

}

module.exports = MateriaEscola;