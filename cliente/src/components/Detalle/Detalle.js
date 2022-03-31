import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BotonEliminar from "../BotonEliminar/BotonEliminar";
import './Detalle.css';

export default props => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/product/" + props.match.params.identificador)
            .then(response => {
                console.log(response.data.producto);
                setProducto({ ...response.data.producto })
            })
    }, []);

    const redireccionar = () => {
        props.history.push('/');
        props.setEstado(true);
    }

    return (
        <div>
            <div className="cuadro">
                <p>Nombre : {producto.title}</p>
                <p>Precio : {producto.price}</p>
                <p>Descripcion : {producto.description}</p>
            </div>
            <div className="botones">
                <div>
                    <Link to={'/' + producto._id + '/edit'}>Editar</Link>
                </div>
                <div>
                    <BotonEliminar successCallback={redireccionar} productId={producto._id} />
                </div>
                <Link to={'/'}>Dashboard</Link>
            </div>
        </div>
    )
}