import styled from "styled-components";

export const Logotemplate = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export const Carritotemplate = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;

`;

export const Fondopantalla = styled.body`
 background-color: #D3C3ED;
` 

export const Bannerstyle = styled.h4`
text-align: center;
font-size: 25px;
margin-top: 30px;
`

export const Navstyle = styled.nav`
.header{
    text-align: center;
    color: rgb(173, 69, 69);
    padding: 0.3%;
    font-size: 120%;
}

.header nav{
    display: inline-block;
    justify-content: center;
    padding-left:10%;
    padding-right:10%; 
}

.link{
    text-decoration: none;
    letter-spacing: 5px;
    padding-right:10%; 
}


.link:hover{
    color: tomato;
}
`

export const Guajolotastyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 312px;
height: 592px;
left: 24px;
top: 431px;
`

export const Busquedastyle = styled.input`
 background-color: white;
 width: 80%;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`
export const Botonbuscar = styled.button`
 background-color: white;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`

export const Formulariostyle = styled.form`
   padding: 20px;
`

export const Imagenguajolota = styled.img`
    width: 50px;
  height: 50px;
`

export const Precio = styled.p`
color:tomato;
`

export const Tarjetasestilo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

position: static;
width: 312px;
height: 112px;
left: 0px;
top: 480px;

background: #FFFFFF;
/* shadow-1 */

box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;

/* Inside Auto Layout */

flex: none;
order: 4;
flex-grow: 0;
margin: 8px 0px;
`

export const Descripciontarjeta = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;

position: static;
width: 184px;
height: 46px;
left: 112px;
top: 33px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
margin: 0px 16px;
`
export const Detalles = styled.div`
display:flex;
padding-top: 45;




`

export const Cantidad = styled.div`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

position: absolute;
width: 190px;
height: 72px;
left: 85px;
top: 301px;

background: #FFFFFF;
/* shadow-1 */

box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;`

export const Restar = styled.img`
    position: absolute;
    width: 20%;
    height: 36%;
    left: 12.33%;
    right: -12.67%;
    top: 26.33%;
    bottom: 8.33%;
`

export const Sumar = styled.img`
    position: absolute;
    width: 20%;
    height: 33%;
    left: 65.33%;
    right: 33.33%;
    top: 29%;
    bottom: 64%;
`

export const Detalleimg = styled.img`
position: absolute;
width: 200px;
height: 200px;
left: 80px;
top: 0px;
`

export const Descripimg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

position: absolute;
width: 312px;
height: 69px;
left: 24px;
top: 214px;
`

export const Detailnombre = styled.h2`
position: static;
width: 312px;
height: 34px;
left: 0px;
top: 0px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 12px;
/* identical to box height */

text-align: center;

/* Black */

color: #0D0D0D;
`

export const Detailprecio =styled.h2`
position: static;
width: 97px;
height: 27px;
left: 107.5px;
top: 42px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height:40px;
/* identical to box height */

text-align: center;

color: #FA4A0C;


/* Inside Auto Layout */

flex: none;
`

export const Buttondiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 24px;

position: absolute;
width: 360px;
height: 101px;
left: 0px;
bottom: 0px;

background: rgba(242, 242, 242, 0.01);
backdrop-filter: blur(48px);`

export const Buttoncarritoagregar = styled.button`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;

position: static;
width: 312px;
height: 69px;
left: 24px;
top: 16px;

/* Primary */

background: #FA4A0C;
border-radius: 40px;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;
`

export const Sabores1 = styled.div`
margin-top: 25rem;
display: flex;

`

export const Carritoh1 = styled.h1`
position: absolute;
width: 58px;
height: 21px;
left: 150.25px;
top: 45px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;
/* identical to box height */

text-align: center;

color: #000000;

`
export const Beber = styled.div`
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 1rem;`

export const Bebida = styled.div`

column-count: 2;
width: 100%;        
margin: 0 auto;
text-align: center;
margin-top: 2rem;`

export const Detalle = styled.div`

    font-size: 14px;
`

export const Divcarrito = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 312px;
height: 197px;
left: 24px;
top: 114px;
` 

export const Divguajolotacarrito = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

position: static;
width: 312px;
height: 56px;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
`

export const Preciocarrito = styled.p`
position: static;
width: 64px;
height: 17px;
left: 248px;
top: 19.5px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #FA4A0C;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 21px;
`

export const Cantidadcarrito = styled.p`

position: static;
width: 152px;
height: 15px;
left: 0px;
top: 17px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */


/* Primary */

color: #FA4A0C;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 2px 0px;`

export const Totaldetalle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 16px;

position: static;
width: 312px;
height: 53px;
left: 0px;
top: 144px;

background: #FFFFFF;
/* shadow-1 */

box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;

/* Inside Auto Layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`

export const Modalcarrito = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 24px;

position: relative;
width: 312px;
height: 399px;

background: #F2F2F2;
border-radius: 20px;
`

export const Modalint = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 0px 16px;

position: static;
width: 264px;
height: 253px;
left: 24px;
top: 24px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`

export const Precioynombre = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

position: static;
width: 190px;
height: 72px;
left: 37px;
top: 165px;

background: #FFFFFF;
/* shadow-1 */

box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;

/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 16px 0px;
`

export const Botonpagar = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;

position: static;
width: 264px;
height: 45px;
left: 24px;
top: 293px;

/* Primary */

background: #FA4A0C;
border-radius: 40px;

/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`