import * as bin from './bin/index';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 15 === 0) {
      c +=Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c +=Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
★Command Lists:
\n${c}\n
[ctrl+l]/clear: clear terminal.
Type '个人简介' to display summary.
`;
};

