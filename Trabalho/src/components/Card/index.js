import "./Card.css";

// const filmes = [{
//   "nome": "Vingadores",
//   "duracao": "2H30",
//   "foto": "vingadores.png",
//   "assistido": true,
//   "ano": 2010,
// },
// {
//   "nome": "Vingadores 2",
//   "duracao": "2H30",
//   "foto": "vingadores.png",
//   "assistido": true,
//   "ano": 2014,
// },
// {
//   "nome": "Vingadores 3",
//   "duracao": "2H30",
//   "foto": "vingadores.png",
//   "assistido": false,
//   "ano": 2015,
// }
// ]


function Assistido( {javisto} ) {
  if (javisto){
    return <p className="text-success">Assistido 😉</p>;
  }
  return <p className="text-danger">Não assistido 😥</p>;
}

export default function Card(filmes) {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={filme.poster} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assistido 
                  javisto={filme.assistido}/>
                <a
                  href={`/detalhes/${filme.id}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}