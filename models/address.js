const address = (sequelize, DataTypes) => {
  const address = sequelize.define("address", {
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  });

  return address;
};

module.exports = address;