import { useContext } from "react"
import { ProductContext } from "./Context/ProductContext"


const ViewCart = () => {
  const { cart, removeCart, setCart } = useContext(ProductContext)

  const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2);

  const handleIncrement = (product) => {
    if(product.quantity < product.rating.count){
      const updatedProduct = { ...product, quantity: product.quantity + 1 };
      const updatedCart = cart.map((item) => (item.id === product.id ? updatedProduct : item));
      setCart(updatedCart);
    }
    else{
      alert("Cannot add more items than available in stock.");
    }
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      const updatedCart = cart.map((item) => (item.id === product.id ? updatedProduct : item));
      setCart(updatedCart)
    }
  };
  return (
    <>
     <div className="amt ms-3 ">
        <h3 className="mt-2">Total Amount : {total} </h3>
      </div>
      <div className="container-fluid mt-3">
        {cart.map((product) => {
          return (
            <div className="card mb-3" key={product.id} style={{ maxwidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={product.image} style={{ height: "250px", padding: "13px", objectFit: "contain"}} className="img-fluid rounded-start" alt="..." />
                </div>

                <div className="col-md-10">
                  <div className="card-body">
                    <div className="d-flex justify-content-between"> <h5 className="card-title">{product.title}</h5>
                      <div className="flex items-center">
                      <button type="button" className="px-2 py-1 bg-gray-200" style={{width:"31px",border:"none"}} onClick={() => handleDecrement(product)}>-</button>
                        <span className="px-4 py-1 bg-gray-100">{product.quantity}</span>
                        <button type="button" className=" px-2 py-1 bg-gray-200" style={{border:"none"}} onClick={() => handleIncrement(product)}>+</button>
                      </div>
                      <p className="card-text mb-1"><strong>Price :</strong> {product.price}</p>
                    </div>

                    <p className="card-text"><strong>Category:</strong> {product.category}</p>
                    <div className="decbut d-flex justify-content-between"><p className="card-text mr-3" style={{ maxWidth: "450px" }}>
                      {product.description}</p>
                      <button className="btn btn-danger text-end" style={{ height: "40px" }} onClick={() => removeCart(product)}>Remove</button>
                    </div>
                    <p className="card-text"><strong>Stock:</strong> {product.rating.count}.</p>
                    <hr></hr>
                    <div className="subtotaldiv d-flex justify-content-between">
                      <p className="card-text"><strong>Subtotal:</strong></p>
                      <p className="card-text"><strong>{(product.price * product.quantity).toFixed(2)}</strong></p>
                    </div>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>)
        })}

      </div>
     
    </>
  )
}

export default ViewCart