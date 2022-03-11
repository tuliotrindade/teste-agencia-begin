const institution = (sequelize, DataTypes) => {
  const institution = sequelize.define("institution", {
    nome: DataTypes.STRING,
    enderecoId: DataTypes.INTEGER,
    administrador: DataTypes.INTEGER,
  });

  return institution;
};

module.exports = institution;