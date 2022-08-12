import config from '../../../config.json';
import {getProjects} from "../bin/api"

export const 关于 = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
  Welcome to my website!
  More about me:
  'sumfetch' - short summary.
  'resume' - my latest resume.
  'readme' - my github readme.`;
};

export const banner = (args?: string[]): string => {
    return `
  Hello, welcome to Qian Hui's navigation!
  
  Type 'help' to see the list of available commands.
  `;
};

export const 导航 = async (args: string[]): Promise<string> => {
  window.open(`${config.link.navs}/`);
  return 'Opening nav...';
};

export const 项目 = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const 网盘 = async (args: string[]): Promise<string> => {
  window.open(`${config.link.alidown}/`);
  return `Opening Cloud Disk...`;
};

export const 鼠标 = async (args: string[]): Promise<string> => {
  return `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/quinhua/api@1.0/css/sb/${args[0]}.css">`;
};

export const 音乐 = async (args: string[]): Promise<string> => {
  return `
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=7586120986&auto=1&height=430"></iframe>
  `;
};