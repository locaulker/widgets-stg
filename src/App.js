import React, { useState } from "react"
// import Accordion from "./components/Accordion"
// import Search from "./components/Search"
import Dropdown from "./components/Dropdown"

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
  const [showDropdown, setShowdropdown] = useState(true)

  return (
    <div>
      <button onClick={() => setShowdropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  )
}

export default App
