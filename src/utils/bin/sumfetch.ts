import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === '钱辉') {
    return `                                                  
             @@@@@@@@@@@@@                   不忘初心，方得始终
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ascii}
 @@                         @@@     @@      
@@        @@@                        @@     
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@        
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

`;
  } 
};

export default sumfetch;
