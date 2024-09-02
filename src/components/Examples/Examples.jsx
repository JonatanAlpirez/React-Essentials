import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";
import TabButton from "../TabButton.jsx";
import Section from "../Section.jsx";

export default function Examples() {
  let tabContent = <div id="tab-content">Please select a topic</div>;

  /* useState hook to manage component state (data)
   const [name, setName] = useState(initialState);

    setName is a function that can be used to update the state
    setName(newState);
    */
  const [selectedTopic, setSelectedTopic] = useState(); // default = undefined == false

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
    <section>
      <Section title="Examples" id="examples">
        <menu>
          {CORE_CONCEPTS.map((concept, index) => (
            <TabButton
              key={index}
              isSelected={selectedTopic === concept.title.toLowerCase()}
              /* function as a prop 
            arrow function is used to pass the argument to the function */
              onClicked={() => handleClickSelected(concept.title.toLowerCase())}
            >
              {concept.title}
            </TabButton>
          ))}
        </menu>
      </Section>

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
  );
}
