import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../assets/redux/reducer/orderList";

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
      {/* Search + Filter */}
      <div className="px-2 items-end" >

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" w-full md:w-1/2 border-2 border-black rounded-lg px-4 py-2  text-base"
          type="text"
          placeholder="Search products..."
        />
        <div className="relative items-end - md:w-auto">
          <p
            onClick={handleFilter}
            className="cursor-pointer text-base font-semibold text-end
            "
          >
            {categors}{" "}
            <i className="fa-solid fa-filter text-orange-600 ml-1"></i>
          </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10 lg:px-20 mt-6">

          {/* Dropdown */}
          <div
            className={`absolute z-50 bg-white border-2 px-4 py-2 rounded-lg shadow-2xl right-0 top-[144px] mr-3 space-y-2 transition-all duration-200 ${
              see ? "block" : "hidden"
            }`}
          >
            {["all products", "electronics", "fitness", "books", "fashion", "home"].map((cat) => (
              <div key={cat}>
                <h1
                  onClick={() => {
                    setCategory(cat);
                    handleFilter();
                  }}
                  className="cursor-pointer hover:text-orange-500 capitalize"
                >
                  {cat}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-20 mt-10 gap-6">
        {filterData.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden flex pt-10 hover:pt-0 hover:px-4 flex-col space-y-2 font-semibold bg-white p-4 rounded-lg shadow-md transition duration-300"
          >
            <div className="absolute inset-0 group-hover:bg-green-400 h-80 mt-28 transition-all duration-1000 animate-anim pointer-events-none z-0"></div>
            <img
              className="rounded-lg z-10 w-full h-48 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="text-center z-10 space-y-1">
              <h1 className="text-base">Name: {product.name}</h1>
              <h1 className="text-base">Price: ${product.price}</h1>
              <h1 className="text-base">Rating: {product.rating}</h1>
            </div>
            <button
              onClick={() => handlePlus(product)}
              className="bg-black z-10 group-hover:block hidden px-4 py-2 mt-2 text-white rounded-full text-base"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carts;
