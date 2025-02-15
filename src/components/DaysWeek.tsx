import { useState } from "react"

export const DaysWeek = () => {
    const [dia, setDia] = useState<string>('Lunes');

    function cambiarDia(e: React.ChangeEvent<HTMLSelectElement>){
        setDia(e.target.value);
    }
  return (
    <div>
        <label htmlFor="">Selecciona el día de la semana: </label>
        <select value={dia} onChange={cambiarDia}>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
        </select>

        <p>El día seleccionado es: {dia}</p>
    </div>
  )
}
