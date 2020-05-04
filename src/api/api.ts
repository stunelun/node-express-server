import getApi from "./BaseRun/getApi";
import insertApiData from "./BaseRun/insertApiData";

// export default (apiUrl: string) => {
//   getApi(apiUrl).then(apiData => insertApiData(apiData))
//   .catch(error => console.error('Error from function api : ', error))
// };
const API_URL: string = "https://api.korbit.co.kr/v1/ticker/detailed/all";

const api = () => {
  getApi(API_URL).then(apiData => insertApiData(apiData))
  .catch(error => console.error('Error from function api : ', error))
};

export default api;