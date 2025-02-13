import { useState } from "react"


export const Form = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | undefined>();

    function enviar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const nombre = parseInt((event.target as HTMLFormElement).nombre.value);
        const edad = parseInt((event.target as HTMLFormElement).edad.value);
        setName(nombre);
        setAge(edad);
        event.currentTarget.reset();
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Ingrese su nombre: </label>
                <input type="text" name="nombre" /><br />
                <label htmlFor="">Ingrese la edad: </label>
                <input type="number" name="edad" /><br />
                <label htmlFor="">Estudios: </label>
                <input type="text" /><br />
                <button onClick={enviar}>Enviar</button>
            </form>
            <h3>Datos ingresados</h3>
            <label htmlFor="">Nombre: {name}</label><br />
            <label htmlFor="">Edad: {age}</label><br />
            <label htmlFor="">Estudios: </label>
        </div>
    )
}
