import React from 'react';
import axios from 'axios';
import './BotonEliminar.css';

export default props => {
    const {productId,successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/product/'+productId)
            .then(response=>{
                alert("Se elimino el producto");
                successCallback();
            })
            .catch(err=>{
                alert("No se pudo eliminar el producto");
                console.log("error : "+err);
            });
    }

    return (
        <div>
            <button className="btnEliminar" onClick={deleteProduct}>Eliminar</button>
        </div>
    )
}