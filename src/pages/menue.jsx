import { useEffect, useState } from "react";
import DataApi from "../components/apiDAta";
import Carts from "../components/carts";
import Add from "../components/addproduct";

function Menue() {
  const [lists, setLists] = useState([]);
  // console.log(lists)

  useEffect(() => {
    // Directly set the data (no axios needed)
    setLists(DataApi);
  }, []);

  return (
    <>
      <Carts products={lists} />
      <hr className="text-black border-2 border-black my-5" />
       <div>
          <Add />
      </div>
    </>
  );
}

export default Menue;
