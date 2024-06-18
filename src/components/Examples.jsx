import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  // #3 way to render content
  // let tabContent = <p>Please select a topic.</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <Section title={Examples} id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Copmonents
        </TabButton>
        {/* this way of building Components where your Components can wrap other Components or other content is called component composition. */}
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
      {/* #2 Can be used AND operator. Because the AND operator will actually output the value that comes after it if the condition in front of it yields true. */}
      {/* {!selectedTopic && <p>Please select a topic.</p> }
        {selectedTopic && (
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
        )} */}
      {/* #3 render content through the variable.*/}
      {/* {tabContent} */}
    </Section>
  );
}
