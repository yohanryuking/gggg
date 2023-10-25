import { useRef } from 'react'
import imagen1 from "./assets/img8.jpg"
import imagen2 from "./assets/img9.jpg";
import './App.css'

function App() {
  const cup = 180;
  const refCaja = useRef();

  const transcribir = (e) => {
    refCaja.current.innerHTML = e.target.value;
  }

  const cambiar = (e) => {
    if (e.target.src.includes("img9")) {
      e.target.src = imagen1;
    } else {
      e.target.src = imagen2;
    }
  }

  const aumentar = (e) => {
    if (e.target.innerHTML == "9") {
      e.target.innerHTML = "1";
      e.target.style.backgroundColor = "#fff";
      e.target.style.color = "black";
    } else {
      e.target.innerHTML = Number(e.target.innerHTML) + 1;
    }

    if (Number(e.target.innerHTML) > 7) {
      e.target.style.backgroundColor = "red";
      e.target.style.color = "white";
    }
    
  }

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cup;
  }
  
  return (
    <>
      <div ref={refCaja} onClick={aumentar}>1</div>
      <div><img onClick={cambiar} src={imagen1} alt="" /></div>
      <button onClick={convertir}>cambiar</button>
      <input onChange={transcribir} type="text" />
    </>
  )
}

export default App
