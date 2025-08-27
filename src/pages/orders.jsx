import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../assets/redux/reducer/orderList";
import { NavLink } from "react-router-dom";

function Orders() {
  const dispatch = useDispatch();
  const items2 = useSelector((state) => state.cart.items);

  const getTotal = () =>
    items2.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-gray-800">
        Your Shopping Cart
      </h1>

      {items2.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6 flex-col md:flex-row gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm md:text-base"
            >
              Clear Cart
            </button>
            <div className="text-lg font-semibold text-gray-700">
              Total: <span className="text-green-600">${getTotal()}</span>
            </div>
          </div>

          {/* Header Row - hidden on small screens */}
          <div className="hidden md:grid grid-cols-6 gap-4 bg-gray-100 px-6 py-3 rounded font-semibold text-gray-700 mb-4 text-sm">
            <span>Product</span>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </div>

          {/* Product Cards */}
          {items2.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center bg-white p-4 rounded-lg shadow mb-4"
            >
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded border"
                />
              </div>

              <h2 className="text-center md:text-left font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-center md:text-left text-gray-600">
                ${item.price}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-2 rounded"
                >
                  -
                </button>
                <span className="min-w-[30px] text-center">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-green-100 hover:bg-green-200 text-green-600 px-2 rounded"
                >
                  +
                </button>
              </div>

              <p className="text-center font-semibold text-gray-700">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center mt-24 space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700 text-center">
            Your cart is currently empty.
          </h1>
          <NavLink to="/menue">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Browse Menu
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Orders;
