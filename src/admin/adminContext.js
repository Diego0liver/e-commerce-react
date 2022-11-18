import { createContext, useState } from "react";
export const LoginContext = createContext();

export function LoginContextProvider({children}){
const [users, setUser] = useState('');
const [password, setPassword] = useState('');
let login = users === 'admin' && password === 'admin'
    return(
        <LoginContext.Provider value={{users, setUser, password, setPassword, login}}>
              {children}
        </LoginContext.Provider>)
}