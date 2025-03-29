import { createContext, useContext, useState, ReactNode } from "react";

//Edit note: I am currently trying to access the translation file that will be available on the user’s end using the props provided by the user in the provider.
// i mean when wrapping the provider around the app, the user will provide the translation file as a prop to the provider.
//if i found a better way to access the translation file, i will update this code.

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  translations: Record<string, any>;
}

export const LanguageProvider = ({
  children,
  translations,
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageContext };
