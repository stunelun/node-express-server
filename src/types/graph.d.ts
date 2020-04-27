export const typeDefs = ["type KorbitDataResponse {\n  seq: Int!\n  currencyPair: String!\n  last: Float!\n  timestamp: Float!\n}\n\ntype KorbitDataSelectionResponse {\n  selection: [KorbitDataResponse]!\n}\n\ntype KorbitDataCurrencyArrayResponse {\n  currencyArray: [String]!\n}\n\ntype Query {\n  KorbitData(currencyPair: String!): KorbitDataResponse!\n  KorbitDataSelection(getCurrencyPair: String!, seq1: Int!, seq2: Int!): KorbitDataSelectionResponse!\n  KorbitDataCurrencyArray: KorbitDataCurrencyArrayResponse!\n}\n\ntype Mutation {\n  inputData(currencyPair: String!, last: Float!, timestamp: Float!): KorbitDataResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  KorbitData: KorbitDataResponse;
  KorbitDataSelection: KorbitDataSelectionResponse;
  KorbitDataCurrencyArray: KorbitDataCurrencyArrayResponse;
}

export interface KorbitDataQueryArgs {
  currencyPair: string;
}

export interface KorbitDataSelectionQueryArgs {
  getCurrencyPair: string;
  seq1: number;
  seq2: number;
}

export interface KorbitDataResponse {
  seq: number;
  currencyPair: string;
  last: number;
  timestamp: number;
}

export interface KorbitDataSelectionResponse {
  selection: Array<KorbitDataResponse>;
}

export interface KorbitDataCurrencyArrayResponse {
  currencyArray: Array<string>;
}

export interface Mutation {
  inputData: KorbitDataResponse;
}

export interface InputDataMutationArgs {
  currencyPair: string;
  last: number;
  timestamp: number;
}
