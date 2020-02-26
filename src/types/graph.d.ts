export const typeDefs = ["type getDataResponse {\n  createdAt: String!\n  updatedAt: String!\n  currency_pair: String!\n  last: Float!\n  timestamp: Float!\n  error: Boolean!\n}\n\ntype Query {\n  getData(name: String!): getDataResponse!\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  getData: getDataResponse;
  sayBye: string;
  sayHello: SayHelloResponse;
}

export interface GetDataQueryArgs {
  name: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface getDataResponse {
  createdAt: string;
  updatedAt: string;
  currency_pair: string;
  last: number;
  timestamp: number;
  error: boolean;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}
