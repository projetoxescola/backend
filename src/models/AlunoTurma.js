const { Model, DataTypes } = require('sequelize');

class AlunoTurma extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            ano: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, 
        {
            sequelize,
            timestamps: false,
        });
    }

    static association(models) {
        this.hasMany(models.Prova, {
            foreignKey: 'idAlunoTurma',
            as: 'ProvaAlunoTurma',
        });
    }

}

module.exports = AlunoTurma;