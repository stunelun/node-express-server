import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

/**
 * Main Application
 */
class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({ schema });
    this.middlewares();
  }

/**
 * Supported MiddleWare : cors, logger, helmet
 * helmet : security middleware
 * cors: Cross-Origin Resource Sharing middleware
 * logger: record flow-logic middleware
 */
  private middlewares = (): void => {
    console.log("MiddleWares Running......");
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };

}


export default new App().app;