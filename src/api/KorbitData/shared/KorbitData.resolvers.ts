import { KorbitDataChartInfoQueryArgs, KorbitDataCurrencyArrayResponse, KorbitDataSelectionResponse } from "../../../types/graph";
// import querySelect          from "../../Query/querySelect";
import querySelectChartInfo from "../../Query/querySelectChartInfo";
import querySelectCurrency  from "../../Query/querySelectCurrency";


/**
 * KorbitData resolvers.
 * Need more function, but can't make function yet. [Gs.Kim]
 */
const resolvers = {
  Query: {
    KorbitDataChartInfo: async (_, args: KorbitDataChartInfoQueryArgs): Promise<KorbitDataSelectionResponse> => {
      return {
        selection: await querySelectChartInfo(args.getCurrencyPair)
      };
    },
    
    KorbitDataCurrencyArray: async (_): Promise<KorbitDataCurrencyArrayResponse> =>{
      return {
        currencyArray: await querySelectCurrency()
      }
    }
  },
  Mutation: {

  }
};

/**
 * Test Code : SelectQuery
 */
// const tester = (testObj: KorbitData[]) => {
//   testObj.forEach(element => {
//       console.log(`
//           **********************
//           Seq : ${element.seq}, 
//           CurrencyPair : ${element.currencyPair}, 
//           TimeStamp : ${element.timestamp}, 
//           Last : ${element.last}
//           #######################
//       `);
//   });
// };

export default resolvers;