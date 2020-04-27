import getApi from "./BaseRun/getApi";
import insertApiData from "./BaseRun/insertApiData";

const api = (apiUrl: string) => {
  getApi(apiUrl).then(apiData => insertApiData(apiData))
  .catch(error => console.error('Error from function api : ', error))
};

export default api;