import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigationCommand = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const navigateCommand = (command: string): string | null => {
    const place = command.slice(8).trim();

    // Navigate to valid paths
    switch (place) {
      case 'about':
      case './about':
        navigate('/about');
        return null;
      case 'projects':
      case './projects':
        navigate('/projects');
        return null;
    }

    // Navigating up
    if (place === '..' || place === '../') {
      if (pathname !== '/') {
        navigate('../');
        return null;
      } else {
        return 'Cannot navigate up from root';
      }
    }

    // If we reach here, the command is invalid
    return 'Invalid Path';
  };

  return navigateCommand;
};
