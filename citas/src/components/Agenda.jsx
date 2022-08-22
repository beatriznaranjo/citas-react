import React from "react"
import PacienteCita from './PacienteCita'
import {nanoid} from 'nanoid'

export default function Agenda({listaCitas, citaInfo, eliminarCita, editarCita}) {
    const agenda = listaCitas.map((cita) => {
        return <PacienteCita
                    key={cita.id}
                    id={cita.id}
                    paciente={cita.paciente}
                    especie={cita.especie}
                    propietario={cita.propietario}
                    email={cita.email}
                    motivo={cita.motivo}
                    fecha={cita.fecha}
                    eliminarCita={eliminarCita}
                    editarCita={editarCita}
                    citaInfo={citaInfo}
                              
                    />
    })

    return (
        <div className="mx-6">
            <div className="grid grid-cols-5 gap-10 mt-16">     
                {agenda}
            </div> 
        </div>
    )
}