import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  /* console.log("App function runs"); */

  let tabContent = <div id="tab-content">Please select a topic</div>;

  /* useState hook to manage component state (data)
   const [name, setName] = useState(initialState);

    setName is a function that can be used to update the state
    setName(newState);
    */
  const [selectedTopic, setSelectedTopic] = useState(); // default = undefined

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClickSelected(selectedButton) {
    setSelectedTopic(selectedButton);
    /* console.log("Selected button: ", selectedButton);
    console.log("Selected topic: ", selectedTopic); */
  }

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
                /* title={concept.title}
                description={concept.description}
                image={concept.image} */
                {...concept}
              />
            ))}

            <CoreConcept {...CORE_CONCEPTS[0]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton
                key={index}
                isSelected={selectedTopic === concept.title.toLowerCase()}
                /* function as a prop 
                arrow function is used to pass the argument to the function */
                onClicked={() =>
                  handleClickSelected(concept.title.toLowerCase())
                }
              >
                {concept.title}
              </TabButton>
            ))}
          </menu>

          {tabContent}

          {/* {selectedTopic === undefined ? (
            <div id="tab-content">Please select a topic</div>
          ) : null}

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;
