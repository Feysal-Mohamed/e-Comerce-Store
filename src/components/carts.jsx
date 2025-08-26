import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../assets/redux/reducer/orderList";
import { useState } from "react";

function Carts({ products }) {
  const [see, setSee] = useState(false);
  const [search, setSearch] = useState("");
  const [categors, setCategory] = useState("all products");

  const dispatch = useDispatch();

  const handleFilter = () => {
    setSee(!see);
  };

  const handlePlus = (product) => {
    dispatch(addToCart(product));
  };

  const filterData = products.filter((product) => {
    const name = product.name || "";
    const category = product.category || "";
    const keyword = search || "";
    const selectedCategory = categors.toLowerCase();

    const matchesSearch = name.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory =
      selectedCategory === "all products" ||
      category.toLowerCase().includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* search $ filter */}
      <div className="flex justify-between px-20 text-2xl font-bold">
        <input value={search} onChange={(e) => {setSearch(e.target.value); }} className="border-2 border-black rounded-lg" type="text" placeholder="" />
        <div className="relative">
          <p onClick={handleFilter} className="cursor-pointer"> {categors} <i className="fa-solid text-orange-600 fa-filter"></i></p>
          <div style={{ display: see ? "block" : "none" }} className="absolute z-50 bg-white border-2 px-4 py-2 rounded-lg shadow-2xl right-2 space-y-2">
            {["all products", "electronics", "fitness", "books", "fashion", "home"].map((cat) => (
              <div key={cat}>
                <h1 onClick={() => {setCategory(cat); handleFilter(); }} className="cursor-pointer hover:text-orange-500"> {cat}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* view  */}
      <div className="grid grid-cols-4 px-20 mt-8 gap-6">
        {filterData.map((product, i) => (
          <motion.div  key={product.id} className="relative group overflow-hidden flex pt-10 hover:pt-0 hover:px-4 flex-col space-y-1 font-semibold bg-white p-4 rounded-lg shadow-md"initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: i * 0.2, }}>
            <div className="absolute inset-0 group-hover:bg-green-400 h-80 mt-28 transition-all duration-1000 animate-anim pointer-events-none z-0"></div>
            <img className="rounded-lg z-10 w-full h-48 object-cover" src={product.image} alt={product.name} />
            <div className="text-center z-10"> <h1>Name: {product.name}</h1> <h1>Price: ${product.price}</h1> <h1>Rating: {product.rating}</h1> <h1>ID: {product.id}</h1> </div>
            <button onClick={() => handlePlus(product)} className="bg-black z-10 group-hover:block hidden px-2 text-white rounded-full pb-1 text-xl" > Add To Cart </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}
export default Carts;
