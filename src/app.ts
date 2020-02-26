import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
        schema
      });
    this.middlewares();
  }
  private middlewares = (): void => {
    console.log("-------------------Test0001");
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
    console.log("-------------------Test0002");
  };
}

export default new App().app;