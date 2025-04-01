import { Button } from '@/shared/ui/button';
import { useTheme } from '@/app/providers/theme-provider';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className='fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg'
    >
      {theme === 'dark' ? (
        <Sun className='h-6 w-6 transition-all' />
      ) : (
        <Moon className='h-6 w-6 transition-all' />
      )}
    </Button>
  );
};
