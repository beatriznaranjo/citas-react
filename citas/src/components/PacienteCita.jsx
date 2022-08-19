import React from "react";

export default function PacienteCita({id, paciente, especie, propietario, email, motivo, fecha, eliminarCita, editarCita, citaActual}) {
    let imageUrl = ""
    if (especie === "perro") {
        imageUrl = "./src/assets/dog.png"
        } else if (especie === "gato") {
        imageUrl = "./src/assets/cat.png"
        } else (imageUrl = "./src/assets/otro.png")


    return (
        <div className="card w-70 mx-auto bg-white shadow-xl hover:shadow my-8">
            <img className="w-24 mx-auto rounded-full -mt-20 border-8 border-white" src={imageUrl} alt=""/>
            <div className="text-center mt-2 text-3xl font-medium">{paciente}</div>
            <div className="text-center mt-2 font-normal text-lg">{propietario}</div>
            <div className="text-center font-light text-sm">{email}</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
                <p>
                    Sintomas: {motivo}
                </p>
            <div className="mt-4 mb-1">
                <span className="bg-gray-700 text-gray-200 text-sm font-medium mr-2 px-2.5 py-0.5">{fecha}</span>
                
            </div>
            </div>
            <hr className="mt-8"/>
            <div className="flex p-4">
                <div className="w-1/2 text-center">
                
                    <button
                        className="text-black hover:text-red-600 rounded font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => eliminarCita(id)}
                    >
                        Eliminar
                    </button>
                </div>
                
                <div className="w-1/2 text-center">
                    <button
                        className="text-black hover:bg-teal-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => editarCita(id)}
                    >
                        Editar
                    </button>
                </div>
            </div>
        </div>

    )

}