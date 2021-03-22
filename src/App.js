import React from "react"
// import Accordion from "./components/Accordion"
import Search from "./components/Search"

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}

export default App
