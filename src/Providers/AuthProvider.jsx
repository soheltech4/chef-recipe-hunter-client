import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../User/Firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({Children}) => {

    const user = {displayName : "Sohel"}

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;