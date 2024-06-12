import { useState } from "react";
import useAuthStore from "../store/AuthStore";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    const onLogin = (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        if (!username || !password) return;
        loginService(username, password);
        if (!user) {
            setMessage("Invalid login credentials");
        }

    }

    const [expandedMenu, setExpandedMenu] = useState(window.innerWidth > 500 ? true : false);

    function toggleMenu() {
        setExpandedMenu(!expandedMenu);
    }

    return (
        <div className="pl-10 pr-10 pt-10 ">
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
            <form onSubmit={onLogin} className="flex flex-col text-center w-[300px] mx-auto py-5 px-5 rounded-2xl">
                <h1 className="text-4xl text-center">Login Page</h1>
                <br />
                <div className="flex flex-col">
                    <label className="text-2xl pt-5 pb-2 text-left">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required className="px-2 border rounded-lg border-slate-700 py-1" />
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl pt-5 pb-2  text-left">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" required className="px-2 border rounded-lg border-slate-700 py-1" />
                </div>
                <button className="rounded-xl text-2xl my-10 py-2 px-2 bg-black text-white" type="submit">Login</button>
            </form>
            {authLoading ? <h2>Loading ...</h2> : null}
            <p>{message}</p>
        </div>
    )
}