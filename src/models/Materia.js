const { DataTypes, Model } = require('sequelize');

class Materia extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.TEXT,
            },
            ativo: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false
        });
    }

    static association(models) {
        
    }

}

module.exports = Materia;