import { createContext, useState } from "react";
import React from "react";
const BuildingsContext = createContext();

const BuildingsContextProvider = ({ children }) => {
  const [buildingsSettings, setBuildingsSettings] = useState({ search: "", filter: "all" }); 

  const onSearch = (e) => {
    setBuildingsSettings({...buildingsSettings, search: e.currentTarget.value});
  }
  const onFilter = (e) => {
    setBuildingsSettings({...buildingsSettings, filter: e.currentTarget.value});
  }
    return (
      <BuildingsContext.Provider value={{ buildingsSettings, setBuildingsSettings, onSearch, onFilter }}>
        {children}
      </BuildingsContext.Provider>
    );
  };
  
  export { BuildingsContext, BuildingsContextProvider };