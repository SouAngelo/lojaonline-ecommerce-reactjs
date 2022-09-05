import { createContext, useState, useEffect } from "react";
import api from "../services/api";


export const ProductContext = createContext({})

export const ProductProvider = ( {children} ) => {

    const [store, setStore] = useState([])   
    const [atualizar, setAtualizar] = useState("women's clothing")


    useEffect(() => {
        async function getStore(){
         
            const response = await api.get(`/products/category/${atualizar}`)
 
            setStore(response.data)

        }
 
        getStore()
    }, [atualizar])

  
    return(
        <ProductContext.Provider value={ {store, setAtualizar} }>
            {children}
        </ProductContext.Provider>
    )
}