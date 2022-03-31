import React,{useState} from "react";
import axios from "axios";
import './ProductForm.css';

export default props => {
    const {initialTitle,initialPrice,initialDescription,onSubmitProp} = props;

    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description,setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,description});
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <form className="formulario" onSubmit={onSubmitHandler}>
            <div>
                <label className="texto">Title</label>
                <input className="inputFormulario" type="text" placeholder="Ingrese titulo" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label className="texto">Price</label>
                <input className="inputFormulario" type="number" placeholder="Ingrese precio" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label className="texto">description</label>
                <textarea className="inputFormulario" placeholder="Ingrese descripcion" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            </div>
            <input className="botonGuardar" type="submit" value="Guardar Producto"/>
            
        </form> 
    );
}