import Config from 'react-native-config';

const get = async (path: string) => {
  const response = await fetch(`${Config.API_URL}${path}`);
  return response.json();
};

export default {
  get,
};
