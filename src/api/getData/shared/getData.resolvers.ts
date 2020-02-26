import { GetDataQueryArgs, getDataResponse } from "../../../types/graph";

const resolvers = {
  Query: {
    getData: (_, args: GetDataQueryArgs): getDataResponse => {
      return {
        error: false,
        currency_pair:"",
        timestamp:0,
        last:0,
        createdAt:"",
        updatedAt:""
      };
    }
  }
};
  
  export default resolvers;