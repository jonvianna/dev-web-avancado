import React from 'react';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>Sobre a Empresa</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sapien vestibulum, bibendum eros vel, commodo nisi. Duis sit amet ipsum auctor, sollicitudin massa a, efficitur orci. Sed eu sem ac velit commodo sollicitudin. Vestibulum id ipsum ante. Nulla facilisi.</p>
      </div>
      <div className="about-image">
        <img src='./../../../public/assets/images/imagem.jpg' alt="Imagem da Empresa" />
      </div>
    </div>
  );
}

export default About;
