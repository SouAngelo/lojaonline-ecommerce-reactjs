import Home from './Pages/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Searchbar from './components/Searchbar/index'
import Carrinho from './Pages/Carrinho/index'
import Footer from './components/Footer/index'
import Produto from './Pages/Produto/index'



export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Searchbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produto/:id' element={ <Produto/> }/>
            <Route path='/carrinho' element={<Carrinho/>}/>
        </Routes>
           <Footer/>
        </BrowserRouter>
    )
}