import "./style.css";
import insertIcon from "./images/insert.png";
import enterIcon from "./images/next.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="prompt">
          <h2>How can I help you today ? </h2>

          <div className="iyad">
            <input type="text" placeholder="Message NextGen..." />
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
