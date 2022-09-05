import './Header.css'
import React from 'react'

export default function Header(){
    return(
        <header>
            <div className='container-header'>
                <div className='contato'>
                  <p>LOJA ONLINE DE ECOMMERCE</p>
                  <p>CENTRAL DE ATENDIMENTO (11) 2222-2222</p>
                </div>

                <nav>
                    <ul>
                        <li>NOSSAS LOJAS</li>
                        <li>MEUS PEDIDOS</li>
                        <li>BLOG</li>
                        <li>FALE CONOSCO</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}