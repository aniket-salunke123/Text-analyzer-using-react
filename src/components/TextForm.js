import React, { useState } from "react";

export default function TextForm(props) {
  //component states
  const [text, setText] = useState("");

  // event Handeling
  const handleTextChange = (event) => {
    console.log("onchange fired");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // converting state value to uppeercase
    console.log("Uppercase clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleLowerClick = () => {
    console.log("Lowercase Clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted To Lowercase", "success");
  };

  const handleReset = () => {
    setText("");
  }

  const handleCopy = () => {
    let copiedText = text;
    navigator.clipboard.writeText(copiedText);
    console.log(copiedText, "copied to clipboard");
    props.showAlert("Copied To Clipboard", "success");
  }

  return (
    <>
      <div className="container my-3" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}}>
        <div className="mb-3" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}}>
          <textarea
            name=""
            id="examplFormControlTextarea1"
            rows="10"
            className="form-control"
            value={text}
            placeholder="Enter Text Here"
            style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}}
            onChange={handleTextChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-secondary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-danger mx-2" onClick={handleReset}>
          Reset
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          <b> {text === "" ? 0 : text.split(" ").length} </b> Words And{" "}
          <b> {text.length} </b> Character in your text.
        </p>
        <p>
          <b> {0.008 * text.split(" ").length} </b> Minutes required to read the
          Text
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
