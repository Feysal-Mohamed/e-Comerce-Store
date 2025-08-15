import { useSelector } from "react-redux";

function Orders() {
  const items2 = useSelector((state) => state.cart.items);
  console.log(items2)

  return (
    <>
   
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

     {items2.map((item, index) => (
        <div
          key={`${item.name}-${index}`} // 👈 safer than just index
          className="flex items-center gap-6 mb-6 p-4 bg-white shadow rounded-lg"
        >
          <img className="h-40 w-40 object-cover rounded" src={item.image} alt={item.name} />
          <div>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}

    </div>
      </>
  );
}

export default Orders;
