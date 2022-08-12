import config from '../../../config.json';

export const bingimg = async (args: string[]): Promise<string> => {
    window.open(`${config.link.bing_img}/`);
    return "Opening Bing Daily Chart...";
};
