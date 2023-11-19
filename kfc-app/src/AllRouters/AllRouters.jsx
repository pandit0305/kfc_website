import Home from "../components/Home";
import Login from "../components/Login";
import Menu from "../Pages/Menu";
import About from '../Pages/About';
import Career from '../Pages/Career';
import Findkfc from '../Pages/Findkfc';
import Startorder from "../Pages/Startorder";
import Cart from "../Pages/Cart";
import Checkout from '../Pages/Checkout';
import {Routes, Route} from 'react-router-dom';

export default function AllRouters(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/career" element={<Career/>}></Route>
                <Route path="/find_kfc" element={<Findkfc/>}></Route>
                <Route path="/start_order" element={<Startorder/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/cart/checkout" element={<Checkout/>}></Route>
            </Routes>        
        </>
    )
};