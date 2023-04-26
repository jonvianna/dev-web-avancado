/*function Opcoes() {
    return (
        <div>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Plano Básico</h2>
                            </div>
                            <div className="card-body text-center">
                                <p>1 usuário 👤</p>
                                <p>Básico com anúncios 📢</p>
                                <p>Resolução: 720p 🤩</p>
                                <p>R$18,90</p>
                                <a href={`/assinado`}>
                                    <div className="btn btn-primary">Assinar</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Plano Intermediário</h2>
                            </div>
                            <div className="card-body text-center">
                                <p>Até 3 usuários 👥</p>
                                <p>Básico com anúncios 📢</p>
                                <p>Resolução: 1080p 🤩</p>
                                <p>R$39,90</p>
                                <div className="btn btn-primary">Assinar</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Plano Premium</h2>
                            </div>
                            <div className="card-body text-center">
                                <p>Usuários ilimitádos 👥</p>
                                <p>Básico com anúncios 📢</p>
                                <p>Resolução: 4k + HDR 🤩</p>
                                <p>R$55,90</p>
                                <div className="btn btn-primary">Assinar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Opcoes;
*/

const opcoes =[{
    nomePlano: "Plano Básico",
    usuarios: "1 usuário 👤",
    anuncio: "Básico com anúncios 📢",
    resolucao: "Resolução: 720p 🤩",
    valor: "R$18,90",
  },
  {
    nomePlano: "Plano Intermediário",
    usuarios: "Até 3 usuários 👥",
    anuncio: "Sem anúncios 📢",
    resolucao: "Resolução: 1080p 🤩",
    valor: "R$39,90",
  },
  {
    nomePlano: "Plano Premium",
    usuarios: "Usuários ilimitádos 👥",
    anuncio: "Sem anúncios 📢",
    resolucao: "Resolução: 4k + HDR 🤩",
    valor: "R$55,90",
  }
  ]


  const Evento = () => {
    return (
      alert("Assinado!")
    )
  }
  


  export default function Opcoes() {
    return (
      <div className="container text-center">
        <div className="row">
        {opcoes.map((opcoes, i) => (
          <div className="col" key={i}> 
            <div className="card">
              <div className="card-header">
                <h3 className="card-header">{opcoes.nomePlano}</h3>
                <div className="card body">
                    <p>{opcoes.usuarios}</p>
                    <p>{opcoes.anuncio}</p>
                    <p>{opcoes.resolucao}</p>
                    <p><b>{opcoes.valor}</b></p>
                    <div className="btn btn-primary" onClick={Evento}>
                  Assinar
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }