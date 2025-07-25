import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg text-3xl"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg text-3xl"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg text-3xl"
          style={{backgroundColor: "blue"}}
          >Blue</button>
           <button
          onClick={() => setColor("yellow")}
          className="outline-none px-6 py-3 rounded-full text-black shadow-lg text-3xl"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
           <button
          onClick={() => setColor("purple")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg text-3xl"
          style={{backgroundColor: "purple"}}
          >Purple</button>
           <button
          onClick={() => setColor("black")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg text-3xl"
          style={{backgroundColor: "black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App