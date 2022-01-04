import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { url } from "../helpers/url";
import {
  Beber,
  Bebida,
  Buttoncarritoagregar,
  Buttondiv,
  Cantidad,
  Descripciontarjeta,
  Descripimg,
  Detailnombre,
  Detailprecio,
  Detalle,
  Detalleimg,
  Detalles,
  Imagenguajolota,
  Precio,
  Restar,
  Sabores1,
  Sumar,
  Tarjetasestilo,
} from "../styles/template";
import Sabores from "./Sabores";
import axios from "axios";
import GlobalStyle2 from "../globalstyles/GlobalstyleDetail";
import cantidadMenos from "../images/menos.jpg";
import cantidadMas from "../images/add.png";
import BebidaDetailView from "./BebidaDetailView";
import { ContextoCarrito } from "../routes/AppRouter";

export function GuajolotaDetailView() {
  const {carrito, setCarrito} = useContext(ContextoCarrito)
  console.log(carrito)
  const CONSTANTS = [
    {
      id: 1,
      nombre: 'verde',
      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores_x5n2iz.png",
    },
    {
      id: 2,
      nombre: 'mole',

      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/mole_vvjx9a.png",
    },
    {
      id: 3,
      nombre: 'rajas',

      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores1_l9blic.png",
    },
    {
      id: 4,
      nombre: 'piña',

      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores3_tfpc78.png",
    },
    {
      id: 5,
      nombre: 'pasas',

      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/pasas_mxlzry.png",
    },
    {
      id: 6,
      nombre: 'guayaba',

      sabor:
        "https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/guayaba_tkamku.png",
    },
  ];

  const { id } = useParams();

  const [guajolota, setGuajolota] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    obtenderData();
  }, []);

  const obtenderData = () => {
    axios
      .get(`${url}/${id}`)
      .then((response) => setGuajolota(response.data))
      .catch((err) => console.log(err));
  };

  if (!guajolota){
    return <div>Cargando...</div>
  }
  return (
    <div>
      <Detalleimg src={guajolota.imagen} alt="tamal"></Detalleimg>
      <div>
        <Descripimg>
          <Detailnombre>{guajolota.nombre}</Detailnombre>
          <Detailprecio>{guajolota.precio}</Detailprecio>
        </Descripimg>
      </div>

      <Cantidad>
        <Restar
          src={cantidadMenos}
          alt="imagen"
          onClick={() => {
            if (carrito.producto.cantidad > 0) {
              setCarrito((prevState) => {
                return {
                  ...prevState,
                  producto: {
                    ...guajolota,
                    cantidad: prevState.producto.cantidad - 1
                  }                 
                }
              })
            }
          }}
        />
        <h3>{carrito.producto.cantidad}</h3>
        <Sumar
          src={cantidadMas}
          alt="imagen"
          onClick={() => {
            setCarrito((prevState) => {
              return {
                ...prevState,
                producto: {
                  ...guajolota,
                  cantidad: prevState.producto.cantidad + 1
                }                 
              }
            })
          }}
        />
      </Cantidad>

      <Detalles>
        {CONSTANTS.map(({ id, sabor, nombre }) => (
          <Sabores1 key={id} onClick={() => {
            setCarrito((prevState) => {
              return {
                ...prevState,
                sabor: nombre,
              }
            })
          }}>
            <img key={id} src={sabor}></img>
          </Sabores1>
        ))}
      </Detalles>

      <BebidaDetailView />

      <Buttondiv>
        <Buttoncarritoagregar onClick={() => {
          navigate('/Carrito')
        }}>
          Agregar {carrito.producto.cantidad} al carrito {carrito.producto.cantidad * guajolota.precio}
        </Buttoncarritoagregar>
      </Buttondiv>
    </div>
  );
}
