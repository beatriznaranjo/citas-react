import React, { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form"
import Agenda from './components/Agenda'

function App() {

  //const [listaCitas, setListaCitas] = useState([])

  const [listaCitas, setListaCitas] = useState(
    () => JSON.parse(localStorage.getItem("listaCitas"))
    ||
    [] 
  )



  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(listaCitas))
  }, [listaCitas])

  const [ editando, setEditando ] = useState(false)
  const [ citaActual, setCitaActual ] = useState({})

  const eliminarCita = (id) => {
    setListaCitas(citasAntiguas => citasAntiguas.filter(cita => cita.id !== id))    
}

  const editarCita = (id) => {
    setEditando(true)
    console.log(`Editando cita ${id}`)
  }



  return (
    <div className="App container flex-col m-auto">
      <div className="grid grid-cols-2">
        <div style={{backgroundImage: `url("./src/assets/doctor-dog.jpg")`}} className="bg-cover h-100">
          <h1 className="mx-14 mt-20 font-bold text-8xl font-medium">LA VETE</h1>
        </div>
        <div className="bg-sky-900 aspect-square flex ">
                <div className="m-auto">
                  <Form
                  listaCitas={listaCitas}
                  setListaCitas={setListaCitas}
                  editando={editando}
                  setEditando={setEditando}
                  citaActual={citaActual}
                  setCitaActual={setCitaActual}
                  />
                </div>
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <h2 className="text-center text-3xl pt-10 font-medium pb-4">AGENDA DE CITAS</h2>
        {listaCitas.length > 0 
        ?
        <Agenda 
          listaCitas={listaCitas}
          eliminarCita={eliminarCita}   
          editarCita={editarCita}   
          citaActual={citaActual}
        />
        :
        <div>
          <h4 className="text-center text-2xl pt-10 pb-4">No hay citas programadas. Cree una cita llenando el formulario</h4>
        </div>
        }
        
      </div>
      
    </div>
      
  )
}

export default App