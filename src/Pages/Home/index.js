import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../contexts/contextProducts'
import './Home.css'

export default function Home(){

   const { store, setAtualizar } = useContext(ProductContext)
   const [check, setCheck] = useState(false)
   const navigate = useNavigate()
  


  let contador = 1;

setInterval(function() {
    document.getElementById('radio' + contador).checked = true;
    contador++

    if (contador > 4) {
        contador = 1;
    }
}, 8000)


const categories = [{
    eletro: "electronics",
    jeme: "jewelery",
    men: "men's clothing",
    women: "women's clothing"
}]
    return(
        <div className='container-home'>
             <section className="container">

                 <section className="sliders">
            
                    <input type="radio" id="radio1" name="input" onChange={(e) => setCheck(e.target.checked)} checked={check}/>
                    <input type="radio" id="radio2" name="input"/>
                    <input type="radio" id="radio3" name="input"/>
                    <input type="radio" id="radio4" name="input"/>
                    <input type="radio" id="radio5" name="input"/>


                 <div className="slide s1">
                   <img src="https://shannajoias.com.br/wp-content/uploads/2021/02/banner-image-1600x700-1-1400x613.jpg" alt=""/>
                 </div>

                 <div className="slide">
                     <img src="https://cdn.shopify.com/s/files/1/0645/2409/1627/files/banner1_1400x.progressive.jpg?v=1655920204" alt=""/>
                </div>

                <div className="slide">
                   <img src="https://static-01.daraz.pk/p/8d5cdbdb29fc86cab3a5042cc9a594d5.jpg" alt=""/>
                 </div>

                <div className="slide">
                    <img src="https://cdn.shopify.com/s/files/1/0925/5148/t/16/assets/slideshow_1.jpg?v=17666903832079538331567101837" alt=""/>
                </div>

               </section>

            <section className="navigation">
                   <label htmlFor="radio1" className="btn"></label>
                   <label htmlFor="radio2" className="btn"></label>
                   <label htmlFor="radio3" className="btn"></label>
                   <label htmlFor="radio4" className="btn"></label>
            </section>

        </section>

        <div className='categories'>

           <div className='info-categories'>
                 <h1>Featured</h1>
           </div>

              <div>
                  {categories.map((category, index) => {

                      return(
                        <div className='categories-btns' key={index}>
                        <button onClick={() => setAtualizar(category.women)}>Women's clothing</button>
                        <button onClick={() => setAtualizar(category.eletro)}>Electronics</button>
                        <button onClick={() => setAtualizar(category.jeme)}>Jewelery</button>
                        <button onClick={() => setAtualizar(category.men)}>Men's clothing</button>
                        
                    </div>
                      )
                  })}
              </div>
          
           
        </div>

        <div className='catalogo'>
              {store.map((item) => {
                  return(
                     <div key={item.id} className='images-demo'>
                            <div className='image-demo'>
                                <img src={item.image} onClick={() => navigate(`/produto/${item.id}`)}/>
                            </div>

                           <div className='text-demo'>
                               <p>{item.title}</p>
                               </div>

                            <div className='btn-demo'>
                                <button type='button' onClick={() => navigate(`/produto/${item.id}`)}>See more</button>
                            </div>
                      </div>
                  )
              })}
        </div>

     </div>
    )
}