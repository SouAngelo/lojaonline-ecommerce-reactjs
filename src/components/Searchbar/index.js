import './Search.css'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../contexts/contextProducts'
import { useContext, useState } from 'react'

export default function Searchbar(){

   const {setAtualizar} = useContext(ProductContext)
   const [newProducts, setNewProducts] = useState()

   
   function getProducts(){
    

       setAtualizar(newProducts)
   }

    return(
        <section className='searchbar'>
             <div className='logo'>
               <Link to='/'><img src='https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011354-1-580x386.png'/></Link> 
             </div>

             <div className='search-input'>
                 <input placeholder='O que voce deseja?'
                 value={newProducts}
                 onChange={(e) => setNewProducts(e.target.value)}
                 />
                 <i className="fa-solid fa-magnifying-glass" onClick={getProducts}></i>
             </div>
             
             <div className='car-kit'>
                 <div className='person-login'>
                 <i className="fa-regular fa-user"></i>
                 </div>

                 <div className='car-shop'>
                <Link to='/carrinho'> <i className="fa-solid fa-cart-shopping"></i> </Link>
                 </div>
             </div>
        </section>
    )
}