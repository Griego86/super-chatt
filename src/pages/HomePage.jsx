import Lottie from "react-lottie"
import animationData from "../lotties/chat-animation.json"
import { NavLink } from "react-router-dom"

export default function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return(
    <div className="px-10 pt-10">
      <div className="flex flex-row justify-between">
        <img className="w-12 h-12" src="../../public/cat-logo.png" alt="cat logo" />
        <nav>
          <ul className="flex flex-row gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/user/chatroom">Let's chat!</NavLink>
            </li>
          </ul>
        </nav>        
      </div>
      <div className="flex flex-col pt-12">
        <div>
          <h1 className="text-2xl text-purple-800">
            Super <br/>Chatt
          </h1>
          <p className="pt-10">Yes, you read it right! Super chatt with two Ts is the new go to chat app in your area. Experience a new way of chatting now. What are you waiting for, get started!</p>
        </div>
        <div className="pt-16">
          <Lottie 
            options={defaultOptions}
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  )
}