import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title';
import axios from 'axios';


const filmes = [{
    "nome": "Vingadores",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    const url = `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filme}`
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    useEffect(()=>{
        setLoading(true);

        axios.get(url).then((response) =>{
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        }).catch(error => {
            setError(true);
            setLoading(false)
          });
    }, [])

    return (
        <div className='container'>
            <h2>Detalhes</h2>

            {loading ? <p>carregando</p> 
            : <div>
                {error ? <p>Filme não esta no este endpoint</p> : 
                <div>
                    <Title title={data.titulo} text="" />
                    <div className="d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                        <div>
                            <img src={data.poster} />
                        </div>

                        <div className='p-4'>
                            <h2>{data.titulo}</h2>
                            <p>{data.ano}</p>
                            <p>{data.nota}</p>
                            <p>{data.sinopse}</p>
                            <button className='btn btn-primary'>Assistir    </button>
                        </div>
                    </div>
                </div>
                }
            </div>
            }
            
        </div>
    )
}

export default Detalhes;