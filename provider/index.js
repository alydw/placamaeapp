
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const[ resultado, setResultado ]  = useState( {
        user : {

            name : '',
            email : '',
            password : '',
            age : ''
        },

        cadastrado : false
    })

 
     

       
   
    return(
        <AuthContext.Provider value={{resultado, setResultado}}>
             {children}
             
        </AuthContext.Provider>

    )
}
