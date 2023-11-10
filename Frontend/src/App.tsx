import Chatpage from "./components/Chatpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App flex">
          <Sidebar />
        <Chatpage />
      </div>
    </>
  );
}

export default App;
