import config from '../../../config.json';
import {getWeather} from "../bin/api";

export const 天气 = async (args: string[]): Promise<string> => {
    const city = args.join('+');
    if (!city) {
      return 'Usage: weather [city]. Example: weather casablanca';
    }
    const weather = await getWeather(city);
    return weather;
  };
  
  