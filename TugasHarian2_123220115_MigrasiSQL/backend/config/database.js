import { Sequelize } from "sequelize";

const db = new Sequelize('notes', 'root','tsani115',{
    host: '34.55.194.201',
    dialect : 'mysql'
})

export default db;