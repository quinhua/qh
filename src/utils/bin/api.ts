import axios from 'axios';
import config from '../../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getYiyan = async () => {
  const { data } = await axios.get('https://v1.hitokoto.cn');
  return {
    yiyan: `“${data.hitokoto}” — ${data.from}`,
  };
};
