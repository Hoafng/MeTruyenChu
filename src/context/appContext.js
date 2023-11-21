import { createContext } from "react";


export const appContext = createContext();

export const AppProvider = ({ children }) => {
    const [exampleData, setExampleData] = useState('Hello from Context!');

  return (
    <appContext.Provider value={exampleData}>
      {children}
    </appContext.Provider>
  );
};