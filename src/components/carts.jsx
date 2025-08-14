import { useDispatch } from "react-redux";
import { addToCart } from "../assets/redux/reducer/orderList";

function Carts({ products }) {
    const diputch=useDispatch()
    const handleplus=()=>{
        diputch(addToCart(products))
    }
  return (
    <div className="grid grid-cols-4 px-20 mt-8 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group overflow-hidden flex pt-10 hover:pt-0 hover:px-4 flex-col space-y-1 font-semibold bg-white p-4 rounded-lg shadow-md"
        >
          <img
            className="rounded-lg w-full h-48 object-contain"
            src={product.image}
            alt={product.name}
          />
          <div className="text-center z-10">
            <h1>Name: {product.name}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>Rating: {product.rating}</h1>
            <h1>Rating: {product.id}</h1>
          </div>
          <button onClick={handleplus} className="bg-black z-10 group-hover:block hidden px-2 text-white rounded-full pb-1 text-xl">
            Add To Cart
          </button>
          {/* <div className="absolute inset-0 group-hover:animate-anim pointer-events-none z-0"></div> */}
        </div>
      ))}
    </div>
  );
}
export default Carts;
