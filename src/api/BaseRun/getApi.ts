/**
 * Get API data using axios.
 * @param apiUrl url address to getting api data.
 */
const getApi = async (apiUrl: string) => {
    try {
      return await require('axios').get(apiUrl);
    } catch (error) {
      console.error(`Error from getAPI [axios.get(${apiUrl}) ] : `, error);
      return error;
    }
  };

  export default getApi;