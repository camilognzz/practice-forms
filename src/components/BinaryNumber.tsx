import { ChangeEvent, useState } from "react"

export const BinaryNumber = () => {

  const [numero, setNumero] = useState<string>('');

  function cambiarNumero(e: ChangeEvent<HTMLInputElement>) {
    const entrada: string = e.target.value;

    if (/^[01]*$/.test(entrada)) {
      setNumero(entrada);
    }
  };

  return (
    <div>
      <p>Ingrese el numero binario:</p>
      <input type="number" value={numero} onChange={cambiarNumero} />
    </div>
  )
}
