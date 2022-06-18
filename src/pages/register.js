import { useCallback, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import { PrivateRoute } from "../component/privateroute";

export default function Register() {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value);
    }

    const handleRegisterPasswordChange = (e) => {
        setRegisterPassword(e.target.value);
    }

    const handleRegisterSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // Login with firebase
            createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/accueil");
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
            }, 
            [registerEmail, registerPassword, setError]
        );

    return (
        <div className='wrapper'>
            <div className='lform'>
            <h1 className='title'>Register</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <label className='input'>
                        Email : 
                        <input type="email" name="email" onChange={handleRegisterEmailChange} />
                    </label>
                    <label className='input'>
                        Password : 
                        <input type="password" name="password" onChange={handleRegisterPasswordChange}/>
                    </label>
                    {error && <p>{error}</p>}
                    <div align='center'>
                        <button type="submit" className='button'>
                            <span>Login </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}