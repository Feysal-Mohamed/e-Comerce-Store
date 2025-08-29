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
     
    </>
  );
}

export default Menue;
