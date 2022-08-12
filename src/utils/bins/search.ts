import config from '../../../config.json';

export const baidu = async (args: string[]): Promise<string> => {
    window.open(`http://www.baidu.com/s?wd=${args.join(' ')}`);
    return `Wow, really? You are using baidu for ${args.join(' ')}?`;
  };

  export const goto = async (args: string[]): Promise<string> => {
    window.open(`//${args.join(' ')}`);
    return `Wow, really? You are using goto for ${args.join(' ')}?`;
  };