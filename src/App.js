import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"

// Accordion Widget Data
const items = [
  {
    title: "What is React?",
    content: "React is a FrontEnd JavaScript Library"
  },

  {
    title: "Why use React?",
    content: "React is the favorite JS Library used by JS Developers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
]

// Dropdown Widget Data
const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
