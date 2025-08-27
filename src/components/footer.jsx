import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-20 px-6 md:px-10 lg:px-20 py-10 bg-gray-100 text-sm">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10">
                {/* Brand Info */}
                <div className="w-full lg:w-[260px] space-y-5">
                    <h1 className="font-bold text-xl">Fasty</h1>
                    <p>
                        We have clothes that suit your style and which you're proud to wear — from women to men.
                    </p>
                    <div className="flex space-x-3 text-xl">
                        <i className="fa-brands fa-twitter p-2 rounded-full hover:bg-gray-200 transition"></i>
                        <i className="fa-brands fa-facebook p-2 rounded-full hover:bg-gray-200 transition"></i>
                        <i className="fa-brands fa-instagram p-2 rounded-full hover:bg-gray-200 transition"></i>
                        <i className="fa-brands fa-github p-2 rounded-full hover:bg-gray-200 transition"></i>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-10">
                    {/* COMPANY */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">COMPANY</h1>
                        <p>About</p>
                        <p>Features</p>
                        <p>Works</p>
                        <p>Career</p>
                    </div>

                    {/* HELP */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">HELP</h1>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Policy</p>
                        <p>Privacy</p>
                    </div>

                    {/* PAGES */}
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-bold text-xl">PAGES</h1>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/menue">Menu</NavLink>
                    </div>

                    {/* RESOURCES */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">RESOURCES</h1>
                        <p>Books</p>
                        <p>Electronics</p>
                        <p>Fashions</p>
                        <p>Furniture</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8" />

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
                <p>Shop.co &copy; 2000–2023, All Rights Reserved</p>
                <img
                    src="https://www.ansonika.com/allaia/img/cards_all.svg"
                    alt="Payment Methods"
                    className="max-w-xs"
                />
            </div>
        </footer>
    );
}

export default Footer;
