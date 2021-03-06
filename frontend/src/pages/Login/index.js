import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />

                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua Id" />
                    <button className="button" type="submit" >Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn  size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}