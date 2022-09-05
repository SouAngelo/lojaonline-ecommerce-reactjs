import {useState, useEffect} from 'react'
import { useParams  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Carrinho.css'


export default function Carrinho(){

 
   const [produto, setProduto] = useState([])
  

   useEffect(() => {
    const lista = localStorage.getItem('@itemsCart')
    setProduto(JSON.parse(lista) || [])
    
  }, [])

  const excluir = (id) => {
    let filtro = produto.filter((item) => {
   return(item.id !== id)

  
    })

    setProduto(filtro)
    localStorage.setItem('@itemsCart', JSON.stringify(filtro))
    
 }
  
  

    return(
        <div className='section-carrinho'>
           
            <div className='container-carrinho'>
           
            {produto.length === 0 && <p className='span'>Seu carrinho está vazio! :( Mas você pode <Link to='/'>comprar aqui</Link> </p>}

            {produto.map((item) => {
                return(
                    <div key={item.id} className='container-car'>
                         <div className='back-list-car'>
                              <Link to='/'>Voltar a lista</Link>
                         </div>

                        <div className='image-carrinho'>
                           <img src={item.image}/>
                        </div>

                       <div className='info-carrinho'>
                          <h1>{item.title}</h1>
                          <p className='price'>$ {item.price}</p>
                        </div>

                      <div className='btn-compra-car'>
                         <button>Buy</button>
                         <p onClick={() => excluir(item.id)} >Excluir</p>
                      </div>
                 </div>
                )
            })}
                
            </div>
        </div>
    )
}
