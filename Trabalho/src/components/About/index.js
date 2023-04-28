import './About.css'

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center col-6">
          <h2>Needfix</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis deleniti est possimus, ratione, quaerat dolor unde excepturi inventore reprehenderit animi deserunt molestias accusamus quis doloribus distinctio. Eum, aut reprehenderit.</p>
        </div>
        <div className="text-center col-6">
          <img src="/assets/images/imagem.jpg" className="custom-image" alt="Imagem da Empresa" />
        </div>
      </div>
    </div> 
  );
};

export default About;
