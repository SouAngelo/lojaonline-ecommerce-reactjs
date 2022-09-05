import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './Produto.css'

export default function Produto(){
 
    const [produto, setProduto] = useState({})
    const { id } = useParams()

   useEffect(() => {
       async function getProduct(){
           const response = await api.get(`/products/${id}`)
           setProduto(response.data)
       }

       getProduct()
   }, [id])
  
  function addCart(){
    const lista = localStorage.getItem('@cartItems')

    let itemsCart = JSON.parse(lista) || []


     itemsCart.push(produto)
     localStorage.setItem('@itemsCart', JSON.stringify(itemsCart))
     alert('Item adicionado ao carrinho!');
  }

    return(
        <div className='section-produto'>
           
            <div className='container-produto'>
            <div className='back-list'>
                <Link to='/'>Voltar a lista</Link>
            </div>
                <div className='image-produto'>
                   <img src={produto.image}/>
                </div>

                <div className='info-produto'>
                    <h1>{produto.title}</h1>
                    <p className='description'>{produto.description}</p>
                    <p className='price'>$ {produto.price}</p>
                </div>

                <div className='btn-compra'>
                    <button>Buy</button>
                    <button onClick={addCart}>Add Cart</button>
                </div>
            </div>
        </div>
    )
}