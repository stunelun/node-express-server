export const typeDefs = ["type KorbitDataResponse {\n  seq: Int!\n  currency_pair: String!\n  last: Float!\n  timestamp: Float!\n}\n\ntype Query {\n  KorbitData(currency_pair: String!): KorbitDataResponse!\n}\n\ntype Mutation {\n  inputData(currency_pair: String!, last: Float!, timestamp: Float!): KorbitDataResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  KorbitData: KorbitDataResponse;
}

export interface KorbitDataQueryArgs {
  currency_pair: string;
}

export interface KorbitDataResponse {
  seq: number;
  currency_pair: string;
  last: number;
  timestamp: number;
}

export interface Mutation {
  inputData: KorbitDataResponse;
}

export interface InputDataMutationArgs {
  currency_pair: string;
  last: number;
  timestamp: number;
}
