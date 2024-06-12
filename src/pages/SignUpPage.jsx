import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DOMAIN from "../services/endpoint";

export default function SignupPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        if (username.length > 32) {
            return setMessage("Username max length is 32!")
        }
        const password = e.target.password.value;
        const email = e.target.email.value;
        const newUser = { username, password, email };
        const res = await axios.post(`${DOMAIN}/api/v1/users/`, newUser);
        if (res?.data.success) {
            setMessage(res?.data.message);
            navigate("/users/login");
        }
        else {
            setMessage(res?.data.message);
        }
    }

    const [expandedMenu, setExpandedMenu] = useState(window.innerWidth > 500 ? true : false);

    function toggleMenu() {
        setExpandedMenu(!expandedMenu);
    }

    return (
        <div className="pl-10 pr-10 pt-10 flex flex-col min-h-screen">
            <header className="flex flex-col md:flex-row md:justify-between">
                <div className="md:hidden flex justify-between">
                    <NavLink><img className="w-12 h-12" src="../../public/cat-logo.png" alt="cat logo" /></NavLink>
                    <div onClick={toggleMenu} className="md:hidden">&#9776;</div>
                </div>
                {expandedMenu && <div className="hidden md:block md:flex">
                    <NavLink><img className="w-12 h-12" src="../../public/cat-logo.png" alt="cat logo" /></NavLink>
                    <NavLink to="/" className='py-5 px-5'>Home</NavLink>
                </div>}
                <div className="md:py-5 flex flex-col md:flex-row">
                    {expandedMenu && <NavLink to="/about" className='text-center py-5 md:px-5 font-bold'>About Us</NavLink>}
                    {expandedMenu && <NavLink to="/user/chatroom" className='text-center font-bold text-green-500 md:py-5'>Let's chat!</NavLink>}
                </div>
                {expandedMenu && <div className="flex flex-col md:block text-center font-bold md:py-5">
                    <NavLink to='/users/login' className='px-5 py-5'>Login</NavLink>
                    <NavLink to='/users/signup' className='md:py-5'>Sign up</NavLink>
                </div>}
            </header>
            <main className="flex-1 mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <h2 className="py-10 text-2xl text-indigo-600 font-medium text-center">Sign Up</h2>
                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" required className="px-2 border rounded-lg border-slate-700 py-1" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="px-2 border rounded-lg border-slate-700 py-1" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="password">Email (for password recovery and notifications)</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" required className="px-2 border rounded-lg border-slate-700 py-1" />
                    </div>
                    <button className="rounded-xl my-5 py-2 px-2 bg-indigo-600 text-white">Sign Up</button>
                    <NavLink to="/superchatt/users/login" className="text-center text-indigo-600">Login</NavLink>
                </form>
                <p>{message}</p>
            </main>
        </div>
    )
}