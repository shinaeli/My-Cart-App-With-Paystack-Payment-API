import React, { createContext, useState } from "react";

export const TotalCostContext = createContext();

export const TotalCostContextProvider = ({ children }) => {
    const [totalCost, setTotalCost] = useState(0);
    const handleTotalCostReduction = reduction => setTotalCost(prev => (prev - reduction) <= 0 ? 0 : prev - reduction);
    const handleTotalCostIncrement = increment => setTotalCost(prev => prev + increment);

    return (
        <TotalCostContext.Provider value={{totalCost, handleTotalCostReduction, handleTotalCostIncrement}}>
            {children}
        </TotalCostContext.Provider>
    )
};