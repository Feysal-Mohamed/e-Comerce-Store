import { useState } from "react"
import { useDispatch } from "react-redux";
import { addproduc } from "../assets/redux/reducer/orderList";
import DataApi from "./apiDAta";
function Add(){
    const dispatch=useDispatch()
    let addingInedex=(e)=>{
        e.preventDefault();
        const indexAd={ "id": idad,
            "category": categoryad, 
            "name": namead, 
            "image": img1ad, 
            "price": pricead, 
            "rating": ratingad 
        }
        dispatch(addproduc(DataApi.push(indexAd)))
    }
    
    console.log("this is addproduct",addproduc)
  
    const [img1ad,setImg1ad]=useState("")
    const [idad,setIdad]=useState("")
    const [categoryad,setCategoryad]=useState("")
    const [pricead,setPricead]=useState("")
    const [ratingad,setRatingad]=useState("")
    const [namead,setNamead]=useState("")

   
    console.log(img1ad,idad,categoryad,pricead,ratingad,namead)
    return<>
       <div className="flex ">
        <div className="px-4 w-full flex justify-center">
            <form className="rounded-lg w-full border-2 p-10 sm:w-[30%]  shadow-lg space-y-3 flex flex-col" onSubmit={addingInedex} action="">
                <h1 className="text-center underline underline-offset-4  text-2xl font-semibold pb-5">Add New Product</h1>
                <hr />
                <img className="w-[200px] rounded-lg border-2 border-black" src={img1ad || "https://tse2.mm.bing.net/th/id/OIP.yO_s1-9-1vdYyqNT7TuO1gAAAA?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm="} alt="" />
                <label
                    htmlFor="photo"
                    className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-blue-700"
                >Add Photo</label>
                <input
                type="file"
                id="photo"
                className="hidden"
                onChange={(e) => setImg1ad(URL.createObjectURL(e.target.files[0]))}
                />
                <input value={namead} onChange={(e)=>setNamead(e.target.value)} className="border-2 border-black mt-3 pl-2 py-1 rounded-lg" type="text"  placeholder="Enter Product Name"/>
                <input value={idad} onChange={(e)=>setIdad(e.target.value)} className="border-2 border-black mt-3 pl-2 py-1 rounded-lg" type="number"  placeholder="Enter Product Id"/>
                <input value={pricead} onChange={(e)=>setPricead(e.target.value)} className="border-2 border-black mt-3 pl-2 py-1 rounded-lg" type="text"  placeholder="Enter Product Price"/>
                <input value={ratingad} onChange={(e)=>setRatingad(e.target.value)} className="border-2 border-black mt-3 pl-2 py-1 rounded-lg" type="text"  placeholder="Enter Product Ratin"/>
                <input value={categoryad} onChange={(e)=>setCategoryad(e.target.value)} className="border-2 border-black mt-3 pl-2 py-1 rounded-lg" type="text"  placeholder="Enter Product category"/>
                <button type="submit" className="bg-blue-600 text-white mt-4 py-2 rounded-lg">Send Data</button>
            </form>
        </div>
        
       </div>
    </>
}

export default Add