import config from '../../../config.json';
import axios from 'axios';


export const 一言 = async () => {
  const { data } = await axios.get(`${config.link.hitokoto}`);
  return `${data.hitokoto} — ${data.from}`;
};

export const 彩虹屁 = async () => {
  const { data } = await axios.get(`${config.link.chp}`);
  return `${data.data.text} — ${data.data.type}`;
};

export const 毒鸡汤 = async () => {
  const { data } = await axios.get(`${config.link.du}`);
  return `${data.data.text} — ${data.data.type}`;
};

export const 文案 = async () => {
  const { data } = await axios.get(`${config.link.pyq}`);
  return `${data.data.text} — ${data.data.type}`;
};
