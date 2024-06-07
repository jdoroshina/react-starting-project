import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepr.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleClick() {
    console.log('Hello world!');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Copmonents</TabButton> 
            {/* this way of building Components where your Components can wrap other Components or other content is called component composition. */}
            <TabButton onClick={handleClick}>JSX</TabButton> 
            <TabButton onClick={handleClick}>Props</TabButton> 
            <TabButton onClick={handleClick}>State</TabButton> 
          </menu>
          
        </section>
      </main>
    </div>
  );
}

export default App;
