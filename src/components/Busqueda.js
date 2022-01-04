import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import {
  Botonbuscar,
  Busquedastyle,
  Descripciontarjeta,
  Formulariostyle,
  Imagenguajolota,
  Precio,
  Tarjetasestilo,
} from "../styles/template";
import { Navbar } from "./Navbar";

export default function Busqueda() {
  const [busqueda, setBusqueda] = useState("");
  const [datos, setDatos] = useState({});
  const [resultados, setResultados] = useState([])

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = () => {
    axios.get(url).then((resp) => {
      setDatos(resp.data);
      setResultados(resp.data)
    }).catch(error=>{
        console.log(error);
      })
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminobusqueda) => {
    var resultadosBusqueda = datos.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminobusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setResultados(resultadosBusqueda);
  };

  return (
    <div>
      <Formulariostyle>
        <Busquedastyle
          type="text"
          placeholder="Buscar"
          value={busqueda}
          onChange={handleChange}
        ></Busquedastyle>
      </Formulariostyle>

      <div>
        {resultados.map((dat) => (
          <Tarjetasestilo key={dat.id} >
              <Imagenguajolota src={dat.imagen} alt="verde" />
              <Descripciontarjeta>
                <p>{dat.nombre}</p>
                <Precio>{dat.precio}</Precio>
              </Descripciontarjeta>
          </Tarjetasestilo>
        ))}
      </div>

      

    </div>
  );
}
