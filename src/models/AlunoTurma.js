const { Model, DataTypes } = require('sequelize');

class AlunoTurma extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
            foreignKey: 'alunoTurmaId',
            as: 'ProvaAlunoTurma',
        });
    }

}

module.exports = AlunoTurma;