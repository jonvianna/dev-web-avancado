import React, { useEffect, useState } from 'react';
import Card from './../components/Card/index';
import Title from './../components/Title';
import axios from 'axios';

function Home() {
    const url = 'https://my-json-server.typicode.com/marycamila184/movies/movies'
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])


    useEffect(()=>{
        setLoading(true);

        axios.get(url).then((response) =>{
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        })
        // ordenar os filmes por:Titulo
        
    }, [])

    function sortArray(type){
        if(type == 'ano'){
            setData([...data].sort((x,y) => y.ano - x.ano))
        }else if (type == 'nota'){
            setData([...data].sort((x,y) => y.nota - x.nota))
        }else{
            [...data].sort((x,y) => x.titulo.localeCompare(y.titulo))
        }
        console.log('s')
    }

    function ordenar(e){
        let value = document.querySelector('select').value
        console.log(value)

        sortArray(value)
        console.log('o')
    }

    // sortArray('nota')

    return (
        <>
        <Title title="Catálogo de filmes" text="Filmes disponíveis" />
        <label className='w-100'>
            <p className='text-center'>Ordenar</p>
            <select className='form-control w-50 mb-5 text-center mx-auto' onChange={(e)=>{ordenar(e)}}>
            <option>titulo</option>
            <option>ano</option>
            <option>nota</option>
        </select>
        </label>
        {/* <Card /> */}
        {loading ? 
        <p>carregando</p> 
        : 
        <Card filmes={data} />}
        </>
    );
}

export default Home;
