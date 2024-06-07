import Lottie from "react-lottie"
import animationData from "../lotties/chat-animation.json"

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
        <div>My Logo</div>
        <nav>
          <ul className="flex flex-row gap-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Let's Chat!</a>
            </li>
          </ul>
        </nav>        
      </div>
      <div className="flex flex-col pt-20">
        <div>
          <h1 className="text-2xl text-purple-800">
            Super <br/>Chatt
          </h1>
          <p className="pt-5">Yes, you read it right! Super chatt with two Ts is the new go to chat app in your area. Experience a new way of chatting now. What are you waiting for, get started!</p>
        </div>
        <div className="pt-20 ">
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