import { getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";

/**
 * Insert(save) API data into mysql Database.
 * Using function: Mapping, Repository.save() .
 * @param apiData Object from getted API data.
 */
const insertApiData = (apiData) => {
    try {
      const apiDataMap = new Map(Object.entries(apiData.data));
      const apiKeys = apiDataMap.keys();
  
      // Biz Logic : insert Query
      apiDataMap.forEach(async (currencypair: string, currencyData: any) => {
        currencypair = apiKeys.next().value;
        currencyData = apiDataMap.get(currencypair);
  
        /**
         * forEach 내부에서 효율적인 선언 방법을 생각중이나, 아직 모르겠음. 
         * 1. 우선 반복문 내에서 새로 객체 생성 방법으로 api데이터 db에 저장하도록 구현.
         * 2. 반복문 내에서 객체 생성시 계속해서 만들어 비효율적일 것으로 판단, 반복문 외부에서 싱글톤으로 KorbitData를 생성, 시도해 보았으나
         * 싱글톤 적용 시 repository에 새로운 setter값이 들어가지 않고, Api 마지막 데이터값만 반복해서 저장되는 현상이 있음.
         * 어디부분을 수정해야 하는 지 아직 조사 중...
         */ 
        //  make KorbitData Object
        const kbInstance = new KorbitData;
        
        // set API data in KorbitData Object :
        kbInstance.setter(currencypair, currencyData.timestamp, currencyData.last);
  
        // insert Object data into Korbit_data Database :
        await getRepository(KorbitData).save(kbInstance);
        
        // Log printing saved data :
        // console.log(`Insert Data info : \ncurrencyPair: ${currencypair}, timestamp: ${currencyData.timestamp}, last: ${currencyData.last}`);
  
      });
      console.log(`Complete from function insertApiData. `);
      
    } catch (error) {
        console.error(`Error from function insertApiData : `, error);
        return error;
    };
  };
  
  export default insertApiData;