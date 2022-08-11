import config from '../../../config.json';

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
  };
  