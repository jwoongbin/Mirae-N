import { createContext } from 'react';
const AccordionContext = createContext({
  acorindex: null,
  setAcorindex: ()=>{}});
export const ContextProvider = AccordionContext.Provider;
export const ContextConsumer = AccordionContext.Consumer;
console.log('초기값?',AccordionContext._currentValue);
export default AccordionContext;