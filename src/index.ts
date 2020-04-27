import dotenv from "dotenv";
dotenv.config();

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import api from './api/api';
import app from "./app";
import connectionOptions from "./ormconfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);


// Mysql connection [TypeORM]
createConnection(connectionOptions).then(async connection => {
  await app.start(appOptions, handleAppStart);
}).catch(error => console.log(error));

/**
 * Start api.
 */
api("https://api.korbit.co.kr/v1/ticker/detailed/all");
// setInterval(callApi, 60000);


