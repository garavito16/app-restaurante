import React from "react";
import {Link} from 'react-router-dom';

export default props => {
    return (
        <div>
            {
                props.productos.map((product,index)=>{
                    return (
                        <div key={"indice"+index}>
                            <Link to={"/detalle/"+product._id}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}