import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../assets/redux/reducer/orderList" ; // adjust the path
import { NavLink } from "react-router-dom";

function Orders() {
  const dispatch = useDispatch();
  const items2 = useSelector((state) => state.cart.items);

  return (
    
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {items2.length > 0 && (
        <button
          onClick={() => {
            {
              dispatch(clearCart());
            }
          }}
          className="mb-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear All
        </button>
      )}{
        items2.length >=1 ?
 

      <div className="flex justify-between pr-10  px-5">
        <h1 className="text-2xl font-semibold">Product</h1>
        <h1 className="text-2xl font-semibold">Name</h1>
        <h1 className="text-2xl font-semibold">Price</h1>
        <h1 className="text-2xl font-semibold">Quantity</h1>
        <h1 className="text-2xl font-semibold">Total price</h1>
        <h1 className="text-2xl font-semibold text-red-700">Delete</h1>
      </div>
      :
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center">you dont have any product</h1>
        <NavLink to="/menue"><button className="bg-blue-500 rounded-lg  px-4 py-2 text-white mt-5 ">Go To Menue</button></NavLink>
      </div> 
        

      }
      {items2.map((item, index) => (
        <div key={`${item.name}-${index}`} className="flex items-center gap-6 mb-6 p-5 bg-white shadow rounded-lg">
          <img className="h-40 w-40 object-cover rounded" src={item.image} alt={item.name} />
          <h2 className="text-xl ml-[84px] w-40 font-semibold">{item.name}</h2>
          <p className="ml-[60px] text-xl w-40 ">${item.price}</p>
          <div className="ml-[30px] text-xl w-40 flex justify-around items-center">
            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-slate-200 px-3 pb-1 rounded-lg"
            >
              +
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-red-200 px-3 pb-1 rounded-lg"
            >
              -
            </button>
          </div>
          <p className="ml-[120px] text-xl w-40 ">${(item.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className=" text-red-500 ml-[120px] underline text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Orders;
