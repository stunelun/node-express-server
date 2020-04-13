import { KorbitDataQueryArgs, KorbitDataResponse } from "../../../types/graph";

/**
 * KorbitData resolvers.
 * Need more function, but can't make function yet. [Gs.Kim]
 */
const resolvers = {
  Query: {
    KorbitData: (_, args: KorbitDataQueryArgs): KorbitDataResponse => {
      return {
        seq:1,
        currency_pair:`currencyPair: ${args.currency_pair}`,
        last:0,
        timestamp:0,
      };
    }
  },
  Mutation: {

  }
};
  
export default resolvers;