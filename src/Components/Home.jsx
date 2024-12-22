import { useContext } from "react"
import { ProductContext } from "./Context/ProductContext"

const Home = () => {
  const { products, cart, removeCart, addCart} = useContext(ProductContext)

  return (
    <div className="container-fluid d-flex mt-5" style={{ flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
      {products.map((product) => {
        const title = product.title.length > 30 ? (product.title.substring(0, 28) + "..") : product.title;
        const description = product.description.length > 100 ? (product.description.substring(0, 98) + "..") : product.description;
        return (<div key={product.id} className="card" style={{ width: "20rem",}}>
          <img src={product.image} style={{ height: "350px", padding: "20px",objectFit:"contain" }} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Price : {product.price}</p>
            <p className="card-text">Category : {product.category}</p>
            <p className="card-text">Rating : {product.rating.rate}</p>
            <p className="card-text">Stock : {product.rating.count}</p>
            <p className="card-text">{description}</p>
           {cart.find(item => item.id === product.id) ? (
    <button className="btn btn-danger" onClick={() => removeCart(product)}>
        Remove from Cart
    </button>
) : (
    <button className="btn btn-success" onClick={() => addCart(product)}>
        Add to Cart
    </button>
)}
             </div>
        </div>)
      })}

    </div>
  )
}

export default Home
