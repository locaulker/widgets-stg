import React, { useState } from "react"
// import Accordion from "./components/Accordion"
// import Search from "./components/Search"
// import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"

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
  return (
    <div>
      <Translate />
    </div>
  )
}

export default App
