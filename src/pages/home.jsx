import { NavLink } from "react-router-dom"
import Menue from "./menue"

function Home(){
    return(
        <>
        <div className=" flex justify-between px-20">
            <div className="w-[600px] mt-28">
                <h1 className="text-4xl font-bold">Welcome</h1>
                <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse cum dolorem quasi unde harum perspiciatis molestias explicabo excepturi numquam? Maxime ad et odio exercitationem nobis dolorum illum iusto ex.</p>
            </div>
            <div>
                <img className="w-[700px]" src="https://themewagon.github.io/furni/images/couch.png" alt="" />
            </div>
        </div>

        {/* section2 */}
        <div className=" flex px-20 ">
            <div className="w-[300px] mt-10">
                <h1 className="text-2xl font-semibold">Crafted with excellent material.</h1>
                <h1 className="text-gray-700 mt-2 mb-2">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</h1>
                <NavLink to="/menue"><button className="bg-blue-600 px-6 py-2 rounded-lg text-white">Explore</button></NavLink>
            </div>
            <div className=" flex space-x-20">
                <div className="group rounded-lg  flex flex-col overflow-hidden space-y-3 pb-12 items-center justify-center  relative">
                <div className="absolute group-hover:bg-green-400 transition-all duration-1000 w-full h-52 bottom-0 -z-50"></div>
                <div className="px-5">
                    <img className=" w-[260px]  rounded-xl" src="https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg" alt="" />

                </div>
                    <h1 className="text-2xl font-bold">Fadhi</h1>
                    <h1 className="text-2xl font-bold">$300</h1>
                </div>
                    <div className="group rounded-lg  flex flex-col overflow-hidden space-y-3 pb-12 items-center justify-center  relative">
                <div className="absolute group-hover:bg-green-400 transition-all duration-1000 w-full h-52 bottom-0 -z-50"></div>
                <div className="px-5">
                    <img className=" w-[260px]  rounded-xl" src="https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg" alt="" />

                </div>
                    <h1 className="text-2xl font-bold">Fadhi</h1>
                    <h1 className="text-2xl font-bold">$300</h1>
                </div>
                    <div className="group rounded-lg  flex flex-col overflow-hidden space-y-3 pb-12 items-center justify-center  relative">
                <div className="absolute group-hover:bg-green-400 transition-all duration-1000 w-full h-52 bottom-0 -z-50"></div>
                <div className="px-5">
                    <img className=" w-[260px]  rounded-xl" src="https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg" alt="" />

                </div>
                    <h1 className="text-2xl font-bold">Fadhi</h1>
                    <h1 className="text-2xl font-bold">$300</h1>
                </div>
            
            </div>

        </div>
        </>
    )
}

export default Home