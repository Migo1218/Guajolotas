import React, { Component } from 'react'
import FormLogin from './FormLogin';
import FormRegistro from './FormRegistro';

export default class Usuario extends Component {
    render() {
        const {user} = useContext(UserContext);

    if (JSON.parse(localStorage.getItem('logueado'))) {
        return (
            <>
            </>
        )
    } else {
        return (
           <>
           <FormLogin></FormLogin>
           <FormRegistro></FormRegistro>
           </>
        )
    }
}
}      

