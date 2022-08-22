import React, {useState, useEffect} from "react"
import {nanoid} from "nanoid"

export default function Form({listaCitas, setListaCitas, editando, setEditando, citaInfo, setCitaInfo}) {
    

  const agregarCita = (citaInfo) => {
      citaInfo.id=nanoid()
      setListaCitas([...listaCitas, citaInfo])
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita agendada");
    agregarCita(citaInfo);
    setCitaInfo({id: "", paciente:"", especie:"", propietario:"", email:"", motivo:"", fecha:""});
  }

    

  const actualizarCita = (e) => {
    e.preventDefault()
    console.log("Cita Actualizada")
    setEditando(false)
    setCitaInfo({id: "", paciente:"", especie:"", propietario:"", email:"", motivo:"", fecha:""})
  }
  


    return (
        <form className="w-full max-w-lg" onSubmit={editando ? actualizarCita : handleSubmit}>

          <h2 className="text-center mt-2 text-white mt-4 mb-7 text-3xl font-medium">{editando ? "Editar cita" : "Agendar nueva cita"}</h2>          

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
              value={citaInfo.paciente}
              //onChange={(e)=>{setPaciente(e.target.value)}}
              //onChange={handleChange}
              onChange={e => setCitaInfo({...citaInfo, paciente: e.target.value})}
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
                                    value="perro"
                                    name="especie"
                                    checked={citaInfo.especie==="perro"}
                                    //onChange={(e)=>{setEspecie(e.target.value)}}
                                    //onChange={handleChange}
                                    onChange={e => setCitaInfo({...citaInfo, especie: e.target.value})}
                                />
                                <label htmlFor="perro" className="mx-1 text-white">Perr@</label>
                            </div>
                            <div className="mx-2">
                                <input 
                                    type="radio" 
                                    id="gato" 
                                    value="gato"
                                    name="especie"
                                    checked={citaInfo.especie==="gato"}
                                    //onChange={(e)=>{setEspecie(e.target.value)}}
                                    //onChange={handleChange}    
                                    onChange={e => setCitaInfo({...citaInfo, especie: e.target.value})}
                                />
                                <label htmlFor="gato" className="mx-1 text-white">Gat@</label>
                            </div>
                            <div className="mx-2">
                                <input 
                                    type="radio" 
                                    id="otro"                                   
                                    value="otro"
                                    name="especie"
                                    checked={citaInfo.especie==="otro"}
                                    //onChange={(e)=>{setEspecie(e.target.value)}}
                                    //onChange={handleChange}
                                    onChange={e => setCitaInfo({...citaInfo, especie: e.target.value})}
                                />
                                <label htmlFor="otro" className="mx-1 text-white">Otr@</label>
                            </div>
                        </div>
          </fieldset>

          {/* Propietario */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="propietario">
              Persona responsable
            </label>
            <input 
              type="text"
              id="propietario" 
              placeholder="Nombre y apellido"
              name="propietario"
              //onChange={(e)=>{setPropietario(e.target.value)}}
              //onChange={handleChange}
              onChange={e => setCitaInfo({...citaInfo, propietario: e.target.value})}
              value={citaInfo.propietario}
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
              value={citaInfo.email}
              //onChange={(e)=>{setEmail(e.target.value)}}
              //onChange={handleChange}
              onChange={e => setCitaInfo({...citaInfo, email: e.target.value})}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
              
        </div>

        {/* Motivo */}
        <div className="flex flex-wrap -mx-3 mb-6">
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
                        //onChange={(e)=>{setMotivo(e.target.value)}}
                        //onChange={handleChange}
                        onChange={e => setCitaInfo({...citaInfo, motivo: e.target.value})}
                        value={citaInfo.motivo}>
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
                  value={citaInfo.fecha}
                  //onChange={(e)=>{setFecha(e.target.value)}}
                  //onChange={handleChange}
                  onChange={e => setCitaInfo({...citaInfo, fecha: e.target.value})}
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
              value={editando ? "Guardar cambios" : "Agendar cita"}
              />     
        </div>
        
      </form>
    )

}