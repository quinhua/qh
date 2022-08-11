import config from '../../../config.json';

export const search = async (args: string[]): Promise<string> => {
    window.open(`https://www.baidu.com/?q=${args.join(' ')}`);
    return `Wow, really? You are using bing for ${args.join(' ')}?`;
  };