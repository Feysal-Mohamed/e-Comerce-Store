import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="sec8 mt-20 list-none px-20">
                <div className="box flex justify-between">
                    <div className="b w-[260px] space-y-5">
                        <h1 className="font-bold  text-xl">Fasty</h1>
                        <p>
                            We have clothds that suit your style and whitch you're proud to wear. ferom women to men.
                        </p>
                        <i className="fa-brands fa-twitter  text-sm p-1 text-center rounded-full mr-2"></i>
                        <i className="fa-brands fa-facebook mr-2"></i>
                        <i className="fa-brands fa-instagram mr-2"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="b space-y-2">
                        <h1 className="font-bold text-xl">COMPANY</h1>
                        <li>about</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </div>
                    <div className="b space-y-2">
                        <h1 className="font-bold text-xl">HELP</h1>
                        <li>Customer Supports</li>
                        <li>Delivery Details</li>
                        <li>Terms & policy</li>
                        <li>privecy</li>
                    </div>
                    <div className="b flex flex-col space-y-2">
                       
                    <h1 className="font-bold text-xl">PAGES</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/menue">Menu</NavLink>
                    </div>
                    <div className="b space-y-2">
                        <h1 className="font-bold text-xl">RESOURCES</h1>
                        <li>Books</li>
                        <li>Electronics</li>
                        <li>Fashions</li>
                        <li>Furneturs</li>
                    </div>
                </div>
                <hr />
                <div className="box flex justify-between mt-8">
                    <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
                    <img src="https://www.ansonika.com/allaia/img/cards_all.svg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;
