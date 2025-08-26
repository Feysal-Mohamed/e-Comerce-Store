import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import Menue from "./menue"

function Home(){
    return(
        <>
            <div className=" flex justify-between px-20">
                <motion.div
                    className="w-[600px] mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "easeInOut" }}>
                    <h1 className="text-4xl font-bold">Welcome</h1>
                    <p className="text-xl text-gray-600 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse cum dolorem quasi unde harum perspiciatis molestias explicabo excepturi numquam? Maxime ad et odio exercitationem nobis dolorum illum iusto ex.</p>
                </motion.div>

                {/* image */}
                <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2, ease: "easeInOut" }}>
                <img className="w-[700px]"src="https://themewagon.github.io/furni/images/couch.png"alt=""/>
                </motion.div>
            </div>

            {/* section2 */}
                <div className="flex px-20">
                    {/* texts*/}
                    <motion.div className="w-[300px] mt-10" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
                        <h1 className="text-2xl font-semibold"> Crafted with excellent material.</h1>
                        <h1 className="text-gray-700 mt-2 mb-2"> Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</h1>
                        <NavLink to="/menue">
                            <motion.button
                                className="bg-blue-600 px-6 py-2 rounded-lg text-white" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}> Explore
                            </motion.button>
                        </NavLink>
                    </motion.div>

                    {/* cards */}
                    <div className="flex space-x-20 ml-10">
                        {[1, 2, 3].map((card, i) => (
                        <motion.div
                            key={i}
                            className="group rounded-lg flex flex-col overflow-hidden space-y-3 pb-12 items-center justify-center relative" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.3 + i * 0.2 }} >

                            <div className="absolute group-hover:bg-green-400 transition-all duration-1000 w-full h-52 bottom-0 -z-50"></div>
                            <div className="px-5">
                                <img className="w-[260px] rounded-xl" src="https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg" alt="" />
                            </div>
                            <h1 className="text-2xl font-bold">Fadhi</h1>
                            <h1 className="text-2xl font-bold">$300</h1>
                        </motion.div>
                        ))}
                    </div>
                </div>
        </>
    )
}

export default Home