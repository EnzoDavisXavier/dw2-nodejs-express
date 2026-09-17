//Arquivo com os dados de conexão com o banco
//importando o sequeliza
import Sequelize from "sequelize";

const connection = new Sequelize({
    //Dados de coneão
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    timezone: "-03:00"
})

//Exportando o módulo
export default connection;