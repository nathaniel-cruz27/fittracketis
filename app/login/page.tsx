'use client';
import "../estilos/login.css";
import { useState } from "react";
import type React from 'react';

export default function login(){
const [email,setEmail] = useState("");
const [contrasenya,setContrasenya] = useState("");

async function enviarDatos (event: React.FormEvent<HTMLFormElement>){
    event?.preventDefault();
    const respuesta = await fetch("ruta",{
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({email:email,contrasenya:contrasenya})
    });
    const datos = await respuesta.json();
}
    return(
        <>
        <main className="fondo">
            <section className="fondoImagen">
            </section>
            <section className="fondoLogin">
                <section className="conteinerLogin">
                <article className="login">
                    <form onSubmit={enviarDatos}>
                        <input 
                            type="email" 
                            placeholder="Escribe tu correo" 
                            value = {email} 
                            onChange={(evento) => setEmail(evento.target.value)}/>

                        <input 
                            type="password" 
                            placeholder="Escribe tu contraseña" 
                            value = {contrasenya} 
                            onChange={(evento) => setContrasenya(evento.target.value)}/>

                        <button type="submit">iniciar sesion</button>
                    </form>
                </article>
                </section>
            </section>
        </main>
        </>
    )
}