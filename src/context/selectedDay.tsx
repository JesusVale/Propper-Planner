import { Dispatch, createContext, useState } from "react";
import React from 'react';

interface ContextType {
    day: Date | null,
    setDay: Dispatch<Date | null>
}

const SelectedDayContext = createContext<ContextType | null>(null);

function SelectedDayProvider({children}: {children: React.ReactNode}){
    const [day, setDay] = useState<Date | null>(null);

    return (
        <SelectedDayContext.Provider value={{
            day,
            setDay
        }}>
            {children}
        </SelectedDayContext.Provider>
    )
}


export {
    SelectedDayContext,
    SelectedDayProvider
}