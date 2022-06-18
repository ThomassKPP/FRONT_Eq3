import React from "react";
import Nav from "./navbar";
import '../App.css';

export default function Accueil() {

    return (
        <div className='wrapper'>
            <div className='lform'>
            <h1 className='title'>Accueil</h1>
            <p>
                Bienvenue sur le site de l'école de l'informatique de l'université de Nice.
            </p>
            <p>
                Ce site est un projet de fin d'études.
            </p>
            <p>
                Il est développé par des étudiants de l'école de l'informatique de l'université de Nice.
            </p>
        </div>
        </div>
    );
}
