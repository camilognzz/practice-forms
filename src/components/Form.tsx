import { useState } from "react"

interface IForm {
    name: string;
    age: number | null;
    degree: boolean;
}


export const Form = () => {
    const [datos, setDatos] = useState<IForm>({
        name: '',
        age: null,
        degree: false
    })

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, type, value, checked } = e.target;

        setDatos((valores) => ({
            ...valores,
            [name]: type === "checkbox"
                ? checked : name === "age"
                    ? value === '' ? null : Number(value)
                    : value,
        }))
    }

    function procesar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Datos Cargados: ${JSON.stringify(datos, null, 2)}`)
    }

    return (
        <div>
            <form onSubmit={procesar}>
                <label htmlFor="name">Ingrese su nombre: </label>
                <input type="text" name="name" value={datos.name} onChange={handleOnChange} /><br />
                <label htmlFor="age">Ingrese la edad: </label>
                <input type="number" name="age" value={datos.age ?? ''} onChange={handleOnChange} /><br />
                <label htmlFor="degree">Estudios: </label>
                <input type="checkbox" name="degree" checked={datos.degree} onChange={handleOnChange} /><br />
                <button type="submit">Enviar</button>
            </form>
            <h3>Datos ingresados</h3>
            <label htmlFor="">Nombre: {datos.name}</label><br />
            <label htmlFor="">Edad: {datos.age}</label><br />
            <label htmlFor="">Estudios: {datos.degree ? 'Con Estudios' : 'Sin Estudios'}</label>
        </div>
    )
}
