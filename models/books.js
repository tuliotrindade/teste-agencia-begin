const books = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    nome: DataTypes.STRING,
    edição: DataTypes.STRING,
    ano: DataTypes.DATEONLY,
    lancamento: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    instituicao: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    endereco: DataTypes.STRING
  });

  return books;
};

module.exports = books;