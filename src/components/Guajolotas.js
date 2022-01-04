import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import {
  Descripciontarjeta,
  Imagenguajolota,
  Precio,
  Tarjetasestilo,
} from "../styles/template";
import { useNavigate } from 'react-router-dom';


export function Guajolotas() {
  const [guajolotas, setGuajolotas] = useState([]);
  const [cargando, setCargando] = useState(false);
  
 const navigate = useNavigate()
 
 const redirect = (id) => {
  navigate(`/Guajolotas/${id}`)
 }

  useEffect(() => {
    obtenderDatos();
  }, []);

  const obtenderDatos = () => {
    setCargando(true);
    axios
      .get(url)
      .then((resp) => {
        setGuajolotas(resp.data);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setCargando(false);
      });
  };

  if (cargando) {
    return <div>Cargando...</div>
  }
  return (
    
    <div>

      <div>
        {guajolotas.map((dat) => (
          <Tarjetasestilo key={dat.id} onClick={() => redirect(dat.id)}>
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
