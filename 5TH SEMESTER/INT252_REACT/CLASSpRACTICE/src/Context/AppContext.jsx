import React,{ createContext } from "react";

export const AppContext=createContext();

const Contextprovider = (props) => {
  const phone="1234567890"

  return(
    <AppContext.Provider value={phone}>
      {props.children}
    </AppContext.Provider>
  )
}
export default Contextprovider