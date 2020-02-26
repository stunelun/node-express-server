import {ConnectionOptions} from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "mysql",
    database: "project_ex",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT,
    port: 3306, //Mysql default port Num
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  };
  
  export default connectionOptions;