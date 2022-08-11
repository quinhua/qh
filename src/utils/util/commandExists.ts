import * as bin from '..';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
