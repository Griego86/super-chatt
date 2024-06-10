import { useState } from "react";
import useAuthStore from "../store/AuthStore";

export default function LoginPage() {
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    const onLogin = (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        if (!username || !password) return;
        loginService(username, password);
        if(!user) {
            setMessage("Invalid login credentials");
        }

    }
    
    return (
       <div className="pl-10 pr-10 pt-10 bg-slate-300">
        <form onSubmit={onLogin} className="flex flex-col text-center">
            <h1 className="text-lg text-center">Login Page</h1>
            <br />
            <div className="flex flex-col">
                <label>Username</label>
                <input type="text" name="username" id="username" placeholder="Username" required className="px-2 border rounded-lg border-slate-700 py-1" />
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required className="px-2 border rounded-lg border-slate-700 py-1" />
            </div>
            <div className="flex flex-col">
                <label>Email</label>
                <input type="email" className="px-2 border rounded-lg border-slate-700 py-1" />
            </div>
            <button className="rounded-xl my-5 py-2 px-2 bg-indigo-600 text-white" type="submit">Login</button>
        </form>
       </div>
    )
}