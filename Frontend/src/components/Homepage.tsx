import Chatpage from "./Chatpage"
import Sidebar from "./Sidebar"

const Homepage = () => {
  return (
    <div className="App flex">
          <Sidebar />
        <Chatpage />
      </div>
  )
}

export default Homepage