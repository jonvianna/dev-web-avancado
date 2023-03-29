function Opcoes() {
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
