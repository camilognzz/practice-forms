import { useState } from "react";
import { rubros, articulos } from "../../mocks/Data";

interface IRubro {
    codigo: number;
    nombre: string;
}
interface IArticuloRubro {
    codigo: number;
    codigorubro: string;
    nombre: string;
    precio: number;
}

export const Rubros = () => {
    const [rubro, setRubro] = useState<IRubro>(rubros[0]);
    const [articulosRubro, setArticulosRubro] = useState<IArticuloRubro[]>(
        articulos.filter((art) => art.codigorubro === String(rubro.codigo))
    );
    const [articulo, setArticulo] = useState<IArticuloRubro>(articulosRubro[0] ?? { codigo: 0, codigorubro: "", nombre: "Sin artículos", precio: 0 });

    function cambiarRubro(e: React.ChangeEvent<HTMLSelectElement>) {
        const nuevoRubro = rubros.find(r => r.codigo === Number(e.target.value)) ?? rubros[0];
        setRubro(nuevoRubro);

        const articulosRubroFiltrados = articulos.filter(art => art.codigorubro === String(nuevoRubro.codigo));
        setArticulosRubro(articulosRubroFiltrados);
        setArticulo(articulosRubroFiltrados[0] ?? { codigo: 0, codigorubro: "", nombre: "Sin artículos", precio: 0 });
    }

    function cambiarArticulo(e: React.ChangeEvent<HTMLSelectElement>) {
        const nuevoArticulo = articulosRubro.find(art => art.codigo === Number(e.target.value)) ?? articulo;
        setArticulo(nuevoArticulo);
    }

    return (
        <div>
            <h3>Rubros</h3>
            <select onChange={cambiarRubro} value={rubro.codigo}>
                {rubros.map((r) => (
                    <option key={r.codigo} value={r.codigo}>{r.nombre}</option>
                ))}
            </select>

            <h3>Artículos</h3>
            <select onChange={cambiarArticulo} value={articulo.codigo}>
                {articulosRubro.map((art) => (
                    <option key={art.codigo} value={art.codigo}>{art.nombre}</option>
                ))}
            </select>

            <h3>Artículo seleccionado</h3>
            <p>{articulo.nombre} - ${articulo.precio}</p>
        </div>
    );
};
