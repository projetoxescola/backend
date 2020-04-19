const { DataTypes, Model } = require('sequelize');

class Turma extends Model {

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
                allowNull: true,
            },
            abreviacao: {
                type: DataTypes.STRING,
                allowNull: false
            }            
        },
        {
            sequelize,
            timestamps: false,
        });

    }

    static association(models){
        this.belongsToMany(models.ProfessorMateriaEscola, {
            foreignKey: 'idTurma',
            through: models.TurmaProfessorMateriaEscola,
            as: 'turmaProfessorMateriaEscola'
        });
        this.hasMany(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'idTurma',
            as: 'professorTurma'
        });
    }

}

module.exports = Turma;