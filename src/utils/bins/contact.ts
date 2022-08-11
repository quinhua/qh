import config from '../../../config.json';

export const email = async (args: string[]): Promise<string> => {
    window.open(`mailto:${config.email}`);
    return `Opening mailto:${config.email}...`;
  };
  
  export const github = async (args: string[]): Promise<string> => {
    window.open(`${config.social.github}/`);
    return 'Opening github...';
  };