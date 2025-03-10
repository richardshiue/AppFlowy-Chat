// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import en from '../locales/en.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'chat';
    // custom resources type
    resources: typeof en;
    // other
  }
}