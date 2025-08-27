import { NavLink } from "react-router-dom";
import Menue from "./menue";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row justify-between px-6 md:px-10 lg:px-20 py-10 items-center gap-10">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-28">
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse cum dolorem quasi unde harum perspiciatis molestias explicabo excepturi numquam? Maxime ad et odio exercitationem nobis dolorum illum iusto ex.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
                        src="https://themewagon.github.io/furni/images/couch.png"
                        alt="Couch"
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-20 py-10 gap-10">
                {/* Text Content */}
                <div className="w-full lg:w-1/4">
                    <h1 className="text-xl md:text-2xl font-semibold">
                        Crafted with excellent material.
                    </h1>
                    <p className="text-gray-700 mt-2 mb-4">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                    <NavLink to="/menue">
                        <button className="bg-blue-600 px-6 py-2 rounded-lg text-white">
                            Explore
                        </button>
                    </NavLink>
                </div>

                {/* Product Cards */}
                <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6">
                    {/* Card 1 */}
                    <div className="group rounded-lg flex flex-col overflow-hidden shadow-lg pb-12 items-center justify-center relative w-full sm:w-[300px]">
                        <div className="absolute w-full h-52 group-hover:bg-green-400 bottom-0 -z-50 transition duration-300"></div>
                        <div className="px-5">
                            <img
                                className="w-full rounded-xl"
                                src="https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg"
                                alt="Wireless Earbuds"
                            />
                        </div>
                        <h1 className="text-2xl font-bold mt-4">Wireless Earbuds</h1>
                        <h1 className="text-2xl font-bold">$300</h1>
                    </div>

                    {/* Card 2 */}
                    <div className="group rounded-lg flex flex-col overflow-hidden shadow-lg pb-12 items-center justify-center relative w-full sm:w-[300px]">
                        <div className="absolute w-full h-52 group-hover:bg-green-400 bottom-0 -z-50 transition duration-300"></div>
                        <div className="px-5">
                            <img
                                className="w-full rounded-xl"
                                src="https://assets.arpost.co/wp-content/uploads/2018/01/28221042/oculus-go-1-e1516017131531.jpg"
                                alt="VR Headset"
                            />
                        </div>
                        <h1 className="text-2xl font-bold mt-4">VR Headset</h1>
                        <h1 className="text-2xl font-bold">$300</h1>
                    </div>

                    {/* Card 3 */}
                    <div className="group rounded-lg flex flex-col overflow-hidden shadow-lg pb-12 items-center justify-center relative w-full sm:w-[300px]">
                        <div className="absolute w-full h-52 group-hover:bg-green-400 bottom-0 -z-50 transition duration-300"></div>
                        <div className="px-5">
                            <img
                                className="w-full rounded-xl"
                                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Smart Watch"
                            />
                        </div>
                        <h1 className="text-2xl font-bold mt-4">Smart Watch</h1>
                        <h1 className="text-2xl font-bold">$300</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
