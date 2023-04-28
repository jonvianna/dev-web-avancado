import React, { useEffect, useState } from 'react';
import Title from './../components/Title';
import { useLocation } from 'react-router-dom';

function Cadastro() {

    function btnSelected(e){
        e.preventDefault()
        console.log('btn')
        console.log(e.target.classList)
        e.target.classList.toggle('btn-success')
    }

    let btns = document.querySelectorAll('input[type=submit]')

    btns = [...btns]
    btns.map((btn) => {console.log('mal');btn.addEventListener('click', function(e){
        e.preventDefault()
        console.log('here')
    })})
    
    return (
        <>

        <form className="d-flex flex-column align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
            <section className="d-flex w-100 align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="d-flex w-100 flex-column align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div>
                <h2>Dados Pessoais</h2>
                <input type='text' className='form-control' placeholder='Nome' />
                <input type='tel' className='form-control' placeholder='Telefone' />
                <input type='text' className='form-control' placeholder='Endereco' />

                <div>
                    <h3>Plano escolhido</h3>
                    <button className='btn btn-secondary' onClick={(e) => btnSelected(e)}>Free</button>
                    <button className='btn btn-secondary' onClick={(e) => btnSelected(e)}>Plus</button>
                </div>
                </div>
            </div>

            <div className="d-flex w-100 flex-column align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div>
                <h2>Dados de Cartao</h2>
                <input type='text' className='form-control' placeholder='Nome no Cartao' />
                <input type='numnber' className='form-control' minLength='20' placeholder='Numero no Cartao' />
                <input type='password' className='form-control' minLength='3' placeholder='CVC' />
                
                </div>
            </div>
            </section>
            <button className='btn btn-primary' onClick={(e) => btnSelected(e)}> Assinar </button>
        </form>
        </>
    );
}

export default Cadastro;
