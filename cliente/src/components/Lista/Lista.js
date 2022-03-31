
import React from "react";
import {Link} from 'react-router-dom';
import BotonEliminar from "../BotonEliminar/BotonEliminar";
import './Lista.css';

export default props => {

    const removeProduct = (id) => {
        props.setProductos(props.productos.filter((product) => product._id !== id));
        props.setEstado(true);
    }

    return (
        <div>
            <h2>Lista de productos</h2>
            {
                props.productos.map((product,index)=>{
                    return (
                        <div className="divItem" key={"indice"+index}>
                            <Link className="titleProducto" to={"/detalle/"+product._id}>{product.title}</Link>
                            <BotonEliminar productId={product._id} successCallback={removeProduct} />
                        </div>
                    )
                })
            }
        </div>
    )
}