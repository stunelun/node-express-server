import {ConnectionOptions} from "typeorm";

/**
 * Connectioin Options: KorbitData Options settings.
 * [ Type: Mysql, database: project_ex ]
 */
const connectionOptions: ConnectionOptions = {
    type: "mysql",
    database: "project_ex",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entities/*.ts"],
    host: process.env.DB_ENDPOINT,
    port: 3306, // Mysql default port Num
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  };
  
  export default connectionOptions;