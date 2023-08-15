import { useNavigationCommand } from './useNavigationCommand';
import { useProcessOutput } from './useProcessOutput';
import { useTerminalOutput } from './useTerminalOutput';
export const useHandleSubmit = (
  command: string,
  setTextObjects: any,
  setUsedCommands: any,
  setUserInput: any
) => {
  const terminalOutput = useTerminalOutput(); // returns string based on a command
  const processedOutput = useProcessOutput(terminalOutput(command), command);
  const navigateCommand = useNavigationCommand();
  const handleSubmit = () => {
    let navErr: string | null = null;
    if (['cls', 'clear'].includes(command)) {
      setTextObjects([]);
    } else if (command.slice(0, 8) === 'navigate') {
      navErr = navigateCommand(command);
    } else {
      const newOutput = [
        { label: `--> ${command}` },
        ...processedOutput, // Using processedOutput directly.
      ];
      setTextObjects((prevText: any) => [...prevText, ...newOutput]);
    }
    if (navErr) {
      setTextObjects((prevText: any) => [
        ...prevText,
        { label: `Error: ${navErr}` },
      ]);
    }
    setUsedCommands((prevState: any) => [...prevState, command]);
    setUserInput('');
  };
  return handleSubmit;
};
