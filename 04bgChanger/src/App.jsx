import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive") //olive

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "Red"}}>Red</button>
             <button onClick={()=>setColor("blue")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "blue"}}>Blue</button>
             <button onClick={()=>setColor("green")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "green"}}>green</button>
             <button onClick={()=>setColor("yellow")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "yellow"}}>yellow</button>
             <button onClick={()=>setColor("pink")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "pink"}}>pink</button>
             <button onClick={()=>setColor("orange")} className="text-white outline-none px-4  py-1 rounded-full shadow-lg" 
            style={{backgroundColor: "orange"}}>orange</button>

        </div>
        </div>
      </div>
    </>
  )
}

export default App
