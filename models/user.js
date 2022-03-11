const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
  });

  return User;
};

module.exports = User;