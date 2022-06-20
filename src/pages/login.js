import { useCallback, useState} from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { Link } from "react-router-dom";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import { PrivateRoute } from "../component/privateroute";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pseudo, setPseudo] = useState('');
    const navigate = useNavigate();
    
    const handlePseudoChange = useCallback((e) => {
        setPseudo(e.target.value);
    },
    [setPseudo]);

    const handleEmailChange = useCallback(
    (e) => {
        setEmail(e.target.value);
    },
    [setEmail]
    );

    const handlePasswordChange = useCallback(
    (e) => {
        setPassword(e.target.value);
    },
    [setPassword]
    );

    const handleSubmit = useCallback(
    (e) => {
        e.preventDefault();
        // Login with firebase
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            try {
                const docRef = addDoc(collection(db,'user'), {
                    value : user.uid,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            navigate("/Chat");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
        });
        }, 
        [password, email, setError]
    );


    return (
        <div className='wrapper'>
            <div className='lform'>
            <h1 className='title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label className='input'>
                        Email : 
                        <input type="email" name="email" onChange={handleEmailChange} />
                    </label>
                    <label className='input'>
                        Password : 
                        <input type="password" name="password" onChange={handlePasswordChange}/>
                    </label>
                    {error && <p>{error}</p>}
                    <div align='center'>
                        <button type="submit" className='button'>
                            <span>Login </span>
                        </button>
                        
                        <Link to={"/register"} className='button'>
                            <button className='button'>
                                <span>Register </span>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}