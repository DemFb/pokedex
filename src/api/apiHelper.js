import axios from 'axios';
const baseUrl = 'https://pokebuildapi.fr/api/v1/';

export const fetchData = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}pokemon`,
  };
  const response = await axios(configurationObject);
  // const json = JSON.stringify(response.data);
  return response;
};
