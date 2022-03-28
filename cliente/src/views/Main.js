import React,{useEffect,useState} from "react";
import Lista from "../components/Lista";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Detalle from "../components/Detalle";

export default () => {
    const [productos,setProductos] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/product/getAll')
            .then(response=>{
                setProductos(response.data);
            })
            .catch(err=>{
                console.log("ocurrio un error :"+err);
            })
    },[]);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ (routeProps) => 
                        <>
                            <ProductForm {...routeProps} />
                            <Lista {...routeProps} productos={productos}/>
                        </>}
                    />
                    <Route exact path="/detalle/:identificador" render={ (routeProps) => <Detalle {...routeProps} />} />
                </Switch>
            </BrowserRouter>
            
            
        </div>
    )
}