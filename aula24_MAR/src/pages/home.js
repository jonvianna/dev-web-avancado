import React from 'react';
import Filme from './../components/Filme/index';
import Title from './../components/Title';

function Home() {
    return (
        <>
        <Title title="Catálogo de filmes" text="Filmes disponíveis" />
        <Filme />
        </>
    );
}

export default Home;
