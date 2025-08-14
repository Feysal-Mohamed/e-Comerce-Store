import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Head(){
    // const diputch=useDispatch()
    // const handleplus=()=>{
    //     diputch(addToCart(p))
    // }
     const items=useSelector((e)=>e.cart.items)
     console.log(items)
    return(
        <>
            <div className="flex justify-between px-10 text-3xl font-semibold py-4 ">
                <h1>Loogo</h1>
                <ul className=" flex gap-6">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/About"><li>About</li></NavLink>
                    <NavLink to="/Contact"><li>Contact Us</li></NavLink>
                    <NavLink to="/Menue"><li>Menue</li></NavLink>
                    <div className="relative">
                    <NavLink to="/Orders"><li>Orders <i className="fa-solid fa-cart-shopping"></i></li></NavLink>
                    <h1 className="absolute -top-4 left-[133px] text-xl">({items.length})</h1>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Head 