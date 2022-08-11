import config from '../../../config.json';

export const about = async (args: string[]): Promise<string> => {
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

export const navs = async (args: string[]): Promise<string> => {
  window.open(`${config.link.navs}/`);
  return 'Opening navs...';
};