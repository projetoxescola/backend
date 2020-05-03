const { DataTypes, Model } = require('sequelize');

class Turma extends Model {

    static init(sequelize) {

        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
            foreignKey: 'turmaId',
            through: models.TurmaProfessorMateriaEscola,
            as: 'turmaProfessorMateriaEscola'
        });
        this.hasMany(models.TurmaProfessorMateriaEscola, {
            foreignKey: 'turmaId',
            as: 'professorTurma'
        });
    }

}

module.exports = Turma;