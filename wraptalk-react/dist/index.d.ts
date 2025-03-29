import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    translations: Record<string, any>;
}
interface LanguageProviderProps {
    children: ReactNode;
    translations: Record<string, any>;
}
declare const LanguageProvider: ({ children, translations, }: LanguageProviderProps) => react_jsx_runtime.JSX.Element;
declare const useLanguage: () => LanguageContextType;

type TranslateThisProps = {
    children?: ReactNode;
    tid: string;
};
declare function TranslateThis({ children, tid }: TranslateThisProps): react_jsx_runtime.JSX.Element;

export { LanguageProvider, TranslateThis, useLanguage };
