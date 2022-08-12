import config from '../../../config.json';

export const 时间 = async (args: string[]): Promise<string> => {
    return new Date().toString();
  };
  