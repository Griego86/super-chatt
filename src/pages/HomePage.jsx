import Lottie from "react-lottie"
import animationData from "../lotties/chat-animation.json"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function HomePage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const [expandedMenu, setExpandedMenu] = useState(window.innerWidth > 500 ? true : false);

  function toggleMenu() {
    setExpandedMenu(!expandedMenu);
  }

  return (
    <div className="px-10 pt-10">
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
      <main className="flex flex-col pt-8">
        <div>
          <h1 className="text-2xl md:text-6xl text-purple-800 font-mono text-center">
            Super <br />Chatt
          </h1>
          <p className="pt-8 text-center text-2xl">Yes, you read it right! Super chatt with two Ts is the new go to chat app in your area. Experience a new way of chatting now. What are you waiting for, get started!</p>
        </div>
        <div className="pt-16">
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
          />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}