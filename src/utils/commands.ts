// List of commands that do not require API calls

import * as bin from './index';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 15 === 0) {
      c += i+'.'+Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += i+'.'+Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
★命令列表:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'sumfetch' to display summary.
`;
};

