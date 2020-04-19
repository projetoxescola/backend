const { DataTypes, Model } = require('sequelize');

class Materia extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
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