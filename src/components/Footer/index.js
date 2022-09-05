import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
             <div className='logo-footer'>
               <Link to='/'><img src='https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011354-1-580x386.png'/></Link> 
             </div>
             
             <div className='redes-sociais'>
                 <h2>Siga nossas redes sociais</h2>
                 <div className='redes-icons'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                 </div>

                 <h2>Reclamações ou sugestões</h2>

                <p> atendimento@store.com.br</p>
             </div>

             <div className='creditos'><p>@2022 Desenvolvido por Angelo Gustavo</p></div>
        </footer>
    )
}