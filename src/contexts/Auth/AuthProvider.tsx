import { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    //Salvar usuario que esta logado
    const [user, setUser] = useState<User | null>(null);

    const signin = (email: string, password: string) => {

    }

    const signup = () => {
        
    }

    return (
        <AuthContext.Provider value={{ user, signin, signup}}>
            {children}
        </AuthContext.Provider>
    );
}