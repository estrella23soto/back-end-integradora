import mysql from "promise-mysql";
import config from "../config";

const conexion = mysql.createConnection({
host:'localhost',
user:'root',
password:'linux',
port:3306,
database:'didactic'
});

const getconexion= () =>{
    return conexion
}

module.exports ={
    getconexion
}