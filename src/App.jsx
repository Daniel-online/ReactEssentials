import staticImg from "./assets/react-core-concepts.png";

const adjetivosReact = ["fundamentais", "cruciais", "importantes", "Must-have"];
function numerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function Header() {
  const randomAdjetivo = adjetivosReact[numerosAleatorios(0, 4)];
  return (
    <header>
      <img src={staticImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Conceitos do React<div class="randomAdjetivo">{randomAdjetivo}</div>que
        você precisará para qualquer aplicação JSX que estiver construindo.
      </p>
    </header>
  );
}
function CoreConcept() {
  function cardConceitosReact() {}
  return (
    <li>
      {cardConceitosReact[0].title}
      <p>{cardConceitosReact[0].description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />;
      <main>
        <h2>Vamos começar!</h2>
      </main>
    </div>
  );
}

export default App;
