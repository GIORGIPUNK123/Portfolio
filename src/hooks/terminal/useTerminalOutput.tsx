import { tree } from '../../tree';

export const useTerminalOutput = () => {
  const terminalOutput = (command: string) => {
    const treeStr = tree();
    if (command.slice(0, 3) === 'man') {
      console.log('man: ', command.slice(4));
      switch (command.slice(4)) {
        case 'navigate':
          return `Use Navigate To Change Page
  Examle: navigate about`;
        case 'ls':
          return `ls - list directory contents`;
      }
    }
    switch (command) {
      case 'about':
        // Hi, I'm Giorgi Charashvili From Georgia (country)
        // And I Am A Certified Full-Stack Web Developer And A 3D Artist With 2 Years Of Experience.
        // IT Work Is More Than A Job To Me. I Am Very Motivated, Hard-Working And Organized Person Who's Always Keen On Learning New Things
        return `💻 I love Writing code and learning new stuff 😊
  I’m currently focusing on Web Developement`;
      case 'skills':
        return 'JavaScript, Typescript, Problem Solving, React, Vue, Node.js, Electron, Git, MySql, HTML/CSS, Blender, Adobe Photoshop, Cinema4D ...';
      case 'projects':
        return `
https://github.com/GIORGIPUNK123/Write|1. Write
https://github.com/GIORGIPUNK123/landing-page/tree/main|2. Landing Page
https://github.com/GIORGIPUNK123/my-cu-cli|3. CLI For Caucasus University Platform
https://github.com/GIORGIPUNK123/Simple-Encoder|4. Simple Encoder
https://github.com/GIORGIPUNK123/Calculator-App|5. Calculator`;
      case 'contact':
        return `mailto: giorgirock@hotmail.com|Email
  https://github.com/GIORGIPUNK123/|Github
  https://www.linkedin.com/in/giorgi-charashvili-877a79229/|LinkedIn`;
      case 'help':
        return 'Available Commands: about, skills, projects, contact, tree, help';
      case 'man':
        return 'man [command you need help with]';
      case 'tree':
        return treeStr;
      default:
        return 'Unknown command. Type "help" for a list of available commands.';
    }
  };
  return terminalOutput;
};
