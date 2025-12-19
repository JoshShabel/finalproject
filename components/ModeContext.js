'use client'
import {createContext, useState} from 'react';

const ModeContext = createContext();
export default ModeContext;

export const ModeProvider = ({children}) => {
    const [isOn, setIsOn] = useState(true);
    const toggleOn = () => {setIsOn(prevIsOn => !prevIsOn)};
    return (
        < ModeContext.Provider value={{isOn, toggleOn}}>
            {children}
        </ModeContext.Provider>
    );
};
