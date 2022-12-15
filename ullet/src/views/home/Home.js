import React from 'react';
import Boton from '../../components/forms/Boton';

// @ts-ignore
import heroImage from "./hero_image.png"

import "./Home.css"

function Home() {
    return (
        <section className='home'>
            <div className='grid container'>
                <div className='headline'>
                    <h2 className='title'>Tus Pagos ...</h2>
                    <h1 className='content'>RÁPIDOS Y EFECTIVOS</h1>
                    <p className='supporting'>Manejar tu plata nunca había sido tan fácil como en <b>Ullet</b></p>
                    <Boton style="fill">QUIERO MI CUENTA</Boton>
                </div>

                <div className='hero-image'>
                    <img src={heroImage}></img>
                </div>

            </div>
        </section>
    );
}

export default Home;