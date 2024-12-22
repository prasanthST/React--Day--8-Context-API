import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "./Context/ProductContext"

const NavigationBar = () => {
  
    const {cart}=useContext(ProductContext)

  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary d-flex align-items-center justify-content-between">
            <div className="logo p-2"><h5>shopping Cart</h5></div>
            <div className="nav d-flex p-2">
            <ul style={{listStyleType:"none", display:"flex", gap:"10px"}}>
            <li>
                <NavLink to={'/'}>Home</NavLink>  
            </li>
            {/* <li>
                <NavLink to={'/product'}>product</NavLink>
            </li> */}
            <li>
                <NavLink to={'/viewcart'}>ViewCart <span className="cartcount  ms-1" style={{backgroundColor:"black", padding:"1px", borderRadius:"50%", height:"28px", width:"24px",  color:"white", display:"inline-block"}}>{cart.length}</span></NavLink>

            </li>
        </ul>
            </div>
    </div>
  )
}

export default NavigationBar