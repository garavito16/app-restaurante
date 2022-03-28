import React, {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default props => {
    const [producto,setProducto] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/product/"+props.match.params.identificador)
            .then(response=>{
                console.log(response.data.producto);
                setProducto({...response.data.producto})
            })
    },[]);

    return(
        <div>
            <p>Nombre : {producto.title}</p>
            <p>Precio : {producto.price}</p>
            <p>Descripcion : {producto.description}</p>
            <Link to={'/'}>Dashboard</Link>
        </div> 
    )
}