import  { createContext, useContext,useState } from "react";

const LocalizationContext= createContext();

export const useLocalization=()=>{
    return  useContext(LocalizationContext)
}

export function LocalizationProvider({children})
    {
        const[locale,setLocale]=useState('en');
        const LocalizedString={
            en:{
                greeting:'Hello World',
                welcome:'welcome to my app'
            },
            es:{
                greeting:'Hola Mundo',
                welcome :'Bienvenido a mi aplicacion'
            },
        }

        const translate = (key)=>{
            return LocalizedString[locale][key]
        }


    return(
        <LocalizationContext.Provider value={{setLocale,locale,translate}} >
            {children}
        </LocalizationContext.Provider>
    )
};