import React, { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form"
import Agenda from './components/Agenda'
import {nanoid} from 'nanoid'


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

  const [ citaInfo, setCitaInfo ] = useState({
    id:"", 
    paciente:"", 
    especie:"", 
    propietario:"", 
    email:"", 
    motivo:"", 
    fecha:""
  })
  
  const eliminarCita = (id) => {
    setListaCitas(citasAntiguas => citasAntiguas.filter(cita => cita.id !== id))    
}

  const [ editando, setEditando ] = useState(false)



  const editarCita = (id) => {
    setEditando(true)
    console.log(`Editando cita ${id}`)  
    const x = listaCitas.filter(cita => cita.id===id)
    const citaActual = (x[0])
    setCitaInfo(citaActual)
  }



  return (
    <div className="App container flex-col m-auto">
      <div className="grid grid-cols-2">
        <div style={{backgroundImage: `url("./src/assets/doctor-dog.jpg")`}} className="bg-cover h-100">
          <h1 className="mx-14 pt-10 text-sky-900 font-bold text-6xl font-medium">CITAS LA VETE</h1>
        </div>
        <div className="bg-sky-900 aspect-square flex ">
                <div className="m-auto">
                  <Form
                  listaCitas={listaCitas}
                  setListaCitas={setListaCitas}
                  citaInfo={citaInfo}
                  setCitaInfo={setCitaInfo}
                  editando={editando}
                  setEditando={setEditando}
                  />
                </div>
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <h2 className="text-center text-3xl text-sky-900 pt-10 font-medium pb-4">AGENDA DE CITAS</h2>
        {listaCitas.length > 0 
        ?
        <Agenda 
          listaCitas={listaCitas}
          eliminarCita={eliminarCita}   
          editarCita={editarCita}
          citaInfo={citaInfo}
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