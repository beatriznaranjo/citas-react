import React, {useState} from "react"
import {nanoid} from "nanoid"

export default function Form({listaCitas, setListaCitas}) {
    
  const [ paciente, setPaciente ] = useState("")
  const [ especie, setEspecie ] = useState("")
  const [ propietario, setPropietario ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ motivo, setMotivo ] = useState("")
  const [ fecha, setFecha ] = useState("")
  
  const agendarCita = (e) => {
    e.preventDefault()
    const cita = {
      id: nanoid(),
      paciente,
      especie,
      propietario, 
      email,
      motivo,
      fecha
    }
    setListaCitas([...listaCitas, cita])
    console.log('Cita guardada correctamente')
    setPaciente("")
    setEspecie("")
    setPropietario("")
    setEmail("")
    setMotivo("")
    setFecha("")
  }

    return (
        <form className="w-full max-w-lg" onSubmit={agendarCita}>

          <h2 className="text-center mt-2 text-white mt-4 mb-7 text-3xl font-medium">Agendar una cita</h2>          

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Paciente */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="paciente">
              Nombre de mascota
            </label>
            <input
              type="text" 
              id="paciente" 
              placeholder="Nombre del animal"
              name="paciente"
              value={paciente}
              onChange={(e)=>{setPaciente(e.target.value)}}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  
            />
          </div>

          {/* Especie */}
          <fieldset className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <legend 
                            className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Especie
                        </legend>
                        <div className="flex flex-wrap mb-6">
                            <div className="mx-2">
                                <input 
                                    type="radio" 
                                    id="perro" 
                                    name="especie"
                                    value="perro"
                                    onChange={(e)=>{setEspecie(e.target.value)}}
                                />
                                <label htmlFor="perro" className="mx-1 text-white">Perr@</label>
                            </div>
                            <div className="mx-2">
                                <input 
                                    type="radio" 
                                    id="gato" 
                                    name="especie"
                                    value="gato"
                                    onChange={(e)=>{setEspecie(e.target.value)}}    
                                />
                                <label htmlFor="gato" className="mx-1 text-white">Gat@</label>
                            </div>
                            <div className="mx-2">
                                <input 
                                    type="radio" 
                                    id="otro" 
                                    name="especie"
                                    value="otro"
                                    onChange={(e)=>{setEspecie(e.target.value)}}
                                />
                                <label htmlFor="otro" className="mx-1 text-white">Otr@</label>
                            </div>
                        </div>
          </fieldset>

          {/* Propietario */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="propietario">
              Nombre responsable
            </label>
            <input 
              type="text"
              id="propietario" 
              placeholder="Persona responsable"
              name="propietario"
              onChange={(e)=>{setPropietario(e.target.value)}}
              value={propietario}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              placeholder="email@email.com"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
              
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Motivo */}
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2" 
                        htmlFor="motivo">
                        Motivo de la cita
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
                        name="motivo" 
                        id="motivo" 
                        cols="30" 
                        rows="5" 
                        placeholder="Sintomas"
                        onChange={(e)=>{setMotivo(e.target.value)}}
                        value={motivo}>
                    </textarea>
                </div>

          {/* Fecha */}
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="paciente">
                  Fecha de la cita
                  </label>
                  <input
                  type="date" 
                  id="fecha" 
                  name="fecha"
                  value={fecha}
                  onChange={(e)=>{setFecha(e.target.value)}}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  
                  />
                </div>
        </div>
        
        {/* Button */}
        <div className="flex">
              <input 
              className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border rounded m-auto"
              type="submit"
              value="Agendar cita"
              />     
        </div>
        
      </form>
    )

}