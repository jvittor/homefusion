import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
