import React,{useEffect,useState} from "react";
import Lista from "../components/Lista/Lista";
import ProductEdit from "./ProductEdit";
import ProductForm from "../components/ProductForm/ProductForm";
import axios from "axios";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Detalle from "../components/Detalle/Detalle";

export default () => {
    const [productos,setProductos] = useState([]);
    const [estado,setEstado] = useState(true);
    
    useEffect(()=>{
        if(estado) {
            axios.get('http://localhost:8000/product/getAll')
            .then(response=>{
                setProductos(response.data);
            })
            .catch(err=>{
                console.log("ocurrio un error :"+err);
            });
            setEstado(false);
        }
    },[estado]);

    const createProducto = (producto) => {
        axios.post("http://localhost:8000/product/new",producto)
            .then((res)=>{
                alert("Se ha creado el producto");
                setEstado(true);
            })
            .catch(err=>{
                console.log("Error: "+err);
            });
    }

    return (
        <div>
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ (routeProps) => 
                        <>
                            <ProductForm {...routeProps} 
                                initialTitle=""
                                initialDescription="" 
                                initialPrice=""
                                onSubmitProp={createProducto}/>
                            <Lista {...routeProps} productos={productos} setProductos={setProductos} setEstado={setEstado}/>
                        </>}
                    />
                    <Route exact path="/detalle/:identificador" render={ (routeProps) => <Detalle {...routeProps} setEstado={setEstado} />} />
                    <Route exact path="/:identificador/edit" render={ (routeProps) => <ProductEdit setEstado={setEstado} {...routeProps} />} />
                </Switch>
            </BrowserRouter>
            
            
        </div>
    )
}