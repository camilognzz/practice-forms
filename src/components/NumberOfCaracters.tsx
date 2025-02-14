import { ChangeEvent, useState } from "react"

export const NumberOfCaracters = () => {

    const [texto, setTexto] = useState<string>("");

    function cambiarTexto(e: ChangeEvent<HTMLTextAreaElement>){
        setTexto(e.target.value);
    }
  return (
    <div>
        <p>
            <textarea value={texto} onChange={cambiarTexto} cols={100} rows={5}></textarea>
        </p>
        <p>
            <textarea value={texto} cols={100} rows={5}></textarea>
        </p>
        <p>Cantidad de caracteres ingresados: {texto.length}</p>
    </div>
  )
}
