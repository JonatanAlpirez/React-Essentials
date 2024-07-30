import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Header() {
  const description = reactDescriptions[getRandomInt(3)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}

            {<CoreConcept {...CORE_CONCEPTS[0]} />}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
