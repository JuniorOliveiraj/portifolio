import { useState, createContext, } from 'react';


export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [onFilterName, setOnFilterName] = useState("");
  const [darkModeThem, setDarkModeThem] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  return (
    <AlteracaoThema.Provider
      value={{ darkModeThem, setDarkModeThem, isLoading, setIsLoading, onFilterName, setOnFilterName, debounce }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




