import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();

export const SharedStateProvider = ({children})=>{

    const [refresh, setRefresh] = useState(0);

    return <SharedStateContext.Provider value={{refresh, setRefresh}}>
        {children}
        </SharedStateContext.Provider>
}

export const useSharedState = ()=> useContext(SharedStateContext);