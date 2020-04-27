// import { Options } from "graphql-yoga";
// import { createConnection } from "typeorm";
// import app from "../app";
// import connectionOptions from "../ormconfig";

// const PORT: number | string = process.env.PORT || 4000;
// const PLAYGROUND_ENDPOINT: string = "/playground";
// const GRAPHQL_ENDPOINT: string = "/graphql";

// const handleAppStart = () => console.log(`Listening on port ${PORT}`);
// const appOptions: Options = {
//   port: PORT,
//   playground: PLAYGROUND_ENDPOINT,
//   endpoint: GRAPHQL_ENDPOINT
// };


// // Mysql connection [TypeORM]
// const connectionApi = () => {
//     createConnection(connectionOptions)
//     .then(async connection => {
//             await app.start(appOptions, handleAppStart);
//             return connection;
//         }
//     ).catch(error => console.log(error));
// }

// export default connectionApi;