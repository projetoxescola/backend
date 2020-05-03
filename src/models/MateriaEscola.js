const { DataTypes, Model } = require('sequelize');

class MateriaEscola extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
            foreignKey: 'materiaEscolaId',
            as: 'materiaProfessor'
        });
    }

}

module.exports = MateriaEscola;