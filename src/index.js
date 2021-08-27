import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
function BoxWrapper() {
  return (
    <div className="App">
      <div className="instruction-area">
        <h1>Instruction:</h1>
        <ol>
          <li>
            Using the 2 buttons below, toggle the box's color between Red and
            Blue backgrounds
          </li>
          <li>
            The same button should not be continuously clicked twice. When 1
            button is clicked, it should be disabled; and enabled again when the
            other button is clicked
          </li>
          <li>
            Create an input event handler, so that users can update the text
            'Box' in the Box component to anything that is being entered in the
            input field below the divider
          </li>
        </ol>
      </div>

      <Box />

      <button>Turn me Blue</button>
      <button>Turn me Red</button>

      <hr />

      <p>Just kidding, I'm not a Box</p>
      <label>
        I am a: &nbsp;
        <input type="text" />
      </label>
    </div>
  );
}

function Box(props) {
  return <div className="box">Hi, I am a Box</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BoxWrapper />, rootElement);
