import React, { useState } from "react";

export const Degree = () => {
    const [estudios, setEstudios] = useState<string>("");

    function cambiarEstudios(e: React.ChangeEvent<HTMLInputElement>) {
        setEstudios(e.target.value);
    }

    return (
        <div>
            <h2>Degree</h2>
            <div>
                <label>
                    <input type="radio" value="Sin estudio" checked={estudios == "Sin estudio"} onChange={cambiarEstudios} />
                    Sin Estudio
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Bachiller" checked={estudios == "Bachiller"} onChange={cambiarEstudios} />
                    Bachiller
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Profesional" checked={estudios == "Profesional"} onChange={cambiarEstudios} />
                    Profesional
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Especialización" checked={estudios == "Especialización"} onChange={cambiarEstudios} />
                    Especialización
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Maestría" checked={estudios == "Maestría"} onChange={cambiarEstudios} />
                    Maestría
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Doctorado" checked={estudios == "Doctorado"} onChange={cambiarEstudios} />
                    Doctorado
                </label>
            </div>

            <p>El estudio seleccionado es: {estudios}</p>
        </div>
    );
};
