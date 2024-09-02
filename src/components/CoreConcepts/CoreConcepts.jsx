import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../CoreConcept/CoreConcept.jsx";

export default function CoreConcepts() {
  return (
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
  );
}
