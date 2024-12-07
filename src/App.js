import "./style.css";
import insertIcon from "./images/insert-icon.png";
import enterIcon from "./images/enter-icon.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="prompt">
          <div>
            <input type="text" placeholder="Your Prompt here..." />
          </div>
          <div className="icons">
            <img src={insertIcon} alt="" />
            <img src={enterIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
