import { getRepository } from "typeorm";
import { KorbitData } from "../entities/KorbitData";

/**
 * Get API data using axios.
 * @param apiUrl url address to getting api data.
 */
const getApi = async (apiUrl: string) => {
  try {
    return await require('axios').get(apiUrl);
  } catch (error) {
    console.error(`Error from getAPI [axios.get(${apiUrl}) ] : `, error);
  }
};

/**
 * Insert(save) API data into mysql Database.
 * Use function: Mapping, Repository.save() .
 * @param apiUrl url address to getting api data.
 */
const getApiIntoDatabase = async (apiUrl: string) => {
  await getApi(apiUrl).then(getapi => {
    const apiData = new Map(Object.entries(getapi.data));
    const apiKeys = apiData.keys();
      
    // Biz Logic : insert Query
    apiData.forEach(async (currencypair: string, currencyData: any) => {
      currencypair = apiKeys.next().value;
      currencyData = apiData.get(currencypair);

      /**
       * forEach 내부에서 효율적인 선언 방법을 생각중이나, 아직 모르겠음. 
       * 1. 반복문 내에서 객체 생성시 계속해서 만들어 비효율적일 것으로 판단, 싱글톤으로 KorbitData를 시도해 보았으나
       * 싱글톤 적용 시 repository에 새로운 setter값이 들어가지 않고, Api 마지막 데이터값만 반복해서 저장되는 현상이 있음.
       * 어디부분을 수정해야 하는 지 아직 조사 중...
       * 2. 우선 반복문 내에서 새로 객체 생성 방법으로 api데이터 db에 저장하도록 구현.
       */ 

      //  make KorbitData Object
      const kbInstance = new KorbitData;
      
      // insert data in KorbitData Object :
      kbInstance.setter(currencypair, currencyData.timestamp, currencyData.last );

      // insert Object data into Korbit_data Database :
      await getRepository(KorbitData).save(kbInstance);
      
      // Log printing saved data :
      console.log(`Insert Data info : \ncurrencyPair: ${currencypair}, timestamp: ${currencyData.timestamp}, last: ${currencyData.last}`);

    });
  }).catch(error => console.log('Error from function getApiIntoDatabase : ', error));
};

export default getApiIntoDatabase;


/**
 * Test Code : Repository.find() command.
 */
// const asd = await connection.manager.find(KorbitData,
  //   {
  //     where: [
  //       { currencyPair: "currencyPairEx2" }
  //     ]
  //   });