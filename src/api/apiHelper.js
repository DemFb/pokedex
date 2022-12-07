import axios, { defaults } from "axios";
const baseUrl = 'https://pokebuildapi.fr/api/v1';

const fetchData = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

// Invoking get method to perform a GET request
const fetchUser = async () => {
  const url = `${baseUrl}/pokemon`;
  const response = await axios.get(url);
  console.log(response.data);
};

defaults exports fetchData
