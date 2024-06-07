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
            Chat <br />Messaging
          </h1>
          <p className="pt-5">Curabitur vel sapien a ipsum rutrum laoreet id id magna. Mauris eu dictum urna. Vestibulum et massa ipsum. Pellentesque sodales tellus vel elementum vulputate. Praesent vel diam augue. Praesent cursus sem id arcu porta vulputate. Nulla cursus enim quis aliquam gravida.</p>
        </div>
        <div>
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