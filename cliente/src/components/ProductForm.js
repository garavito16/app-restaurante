import React,{useState} from "react";

import axios from "axios";

export default props => {
    const [title,setTitle] = useState();
    const [price,setPrice] = useState();
    const [description,setDescription] = useState();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/product/new",{
            title,price,description
        })
            .then((res)=>{
                console.log("response: "+res);
                alert("Se ha creado el producto");
            })
            .catch(err=>{
                console.log("Error: "+err);
            });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" placeholder="Ingrese titulo" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" placeholder="Ingrese precio" onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>description</label>
                <textarea placeholder="Ingrese descripcion" onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <input type="submit" />
        </form> 
    );
}