import bcrypt from 'bcrypt';
import { Model, DataTypes } from 'sequelize';

// Definindo e exportando o modelo User
export default (sequelize) => {
  class User extends Model {
    /**
     * Método auxiliar para definir associações.
     * Este método não faz parte do ciclo de vida do Sequelize.
     * O arquivo `models/index.js` chamará este método automaticamente.
     */
    static associate(models) {
      // definir associações aqui
    }
  }

  User.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Adiciona uma restrição de unicidade ao email
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(value, saltRounds);
        this.setDataValue('password', hash);
      },
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};