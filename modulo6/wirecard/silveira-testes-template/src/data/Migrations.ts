import BaseDataBase from "./BaseDatabase"
import Products from "./Products.json"
// const fs = require("fs")
// const products = fs.readFileSync("./Products.json", "utf-8")

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }
export class Migrations extends BaseDataBase{
  
    createTables = () => {
          BaseDataBase.connection.raw(`
      create table amaro_Products(
        id varchar(255) not null,
        name varchar(255) not null,
        tags varchar(255) not null
      );
 
        create table amaro_search(
            user_id varchar (255),
            user_name varchar (255),
            user_tags varchar (255),
            foreign key(user_id) references amaro_Products(id)
            foreign key(user_name) references amaro_Products(name)
            foreign key(user_tags) references amaro_Products(tags)
        )
  `)
  .then(() => {console.log("tables created successfully")})
  .catch(printError)
  
  
}
 
 insertProducts = () => BaseDataBase.connection("amaro_Products")  
 .insert(Products)
 .then(() => { console.log("Products created successfully") })
 .catch(printError)
 closeConnection = () => {  BaseDataBase.connection.destroy() }
  }

 
  
