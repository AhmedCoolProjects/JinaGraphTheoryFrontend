import { useState, useEffect, createContext } from "react";

export const AppContext = createContext([{}, () => {}]);

export const AppProvider = (props) => {
  const [isDark, setIsDark] = useState(null);
  useEffect(() => {
    if (process.browser) {
      if (isDark !== null) {
        localStorage.setItem("next-is-dark", isDark);
        return;
      }
      let isDarkInStorage = localStorage.getItem("next-is-dark");
      let isDarkInStorage_ =
        false == isDarkInStorage || "false" == isDarkInStorage ? false : true;
      setIsDark(isDarkInStorage_);
      localStorage.setItem("next-is-dark", isDarkInStorage_);
    }
  }, [isDark]);
  const handleChangeMode = () => {
    setIsDark(!isDark);
  };
  return (
    <AppContext.Provider value={[isDark, handleChangeMode]}>
      {/* <AppContext.Provider value={[]}> */}
      {props.children}
    </AppContext.Provider>
  );
};
