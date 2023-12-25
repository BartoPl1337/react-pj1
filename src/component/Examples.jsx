import { useState } from "react"

import Section from "./Section"
import TabButton from "./TabButton"
import { EXAMPLES } from "../data"

export default function Examples(){
        useState()
        const [ selectedTopic, setSelectedTopic ] = useState()
        function handleClick(SelectedButton){
          setSelectedTopic(SelectedButton)
        }

    return(
        <Section title="Something" id="examples">
          <menu>
           <TabButton label='Components' IsSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}/>
           <TabButton label='JSX' IsSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}/>
           <TabButton label='Props' IsSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}/>
           <TabButton label='State' IsSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}/>
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
        </Section>
    )
}