import {
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type ThemeProviderState = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const initialstate: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeProviderState>(initialstate);

const getTheme = () => {
  const theme = localStorage.getItem('maogym-theme');
  if (!theme) {
    localStorage.setItem('maogym-theme', 'light');
    return 'light';
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('maogym-theme', theme);
      document.querySelector('html')?.setAttribute('class', theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
