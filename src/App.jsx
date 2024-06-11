import { useState } from 'react';

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from './data.js'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepr.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic] = useState('components');

  function handleClick(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
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
            <TabButton onClick={() => handleClick('components')}>Copmonents</TabButton> 
            {/* this way of building Components where your Components can wrap other Components or other content is called component composition. */}
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton> 
            <TabButton onClick={() => handleClick('props')}>Props</TabButton> 
            <TabButton onClick={() => handleClick('state')}>State</TabButton> 
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
