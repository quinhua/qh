import config from '../../../config.json';

export const 邮箱 = async (args: string[]): Promise<string> => {
    window.open(`mailto:${config.email}`);
    return `Opening email...`;
  };
  
  export const github = async (args: string[]): Promise<string> => {
    window.open(`https://github.com/${config.social.github}/`);
    return 'Opening github...';
  };