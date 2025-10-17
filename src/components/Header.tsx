import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </header>
  );
};
