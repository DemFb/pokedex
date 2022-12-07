import axios from "axios";
const baseUrl = 'https://pokebuildapi.fr/api/v1';

export const fetchData = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};
