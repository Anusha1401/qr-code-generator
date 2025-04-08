import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [input, setInput] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  // Define styles as objects
  const containerStyle = {
    width: "700px",
    backgroundColor: "#240B2E",
    height: "500px",
    borderRadius: "35px",
    display: "inline-block",
    margin: "auto",
    marginTop: "100px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
  };

  const leftContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    display: "inline-flex",
  };

  const headingStyle = {
    fontFamily: "fantasy",
    textAlign: "center",
  };

  const inputStyle = {
    width: "300px",
    height: "50px",
    borderRadius: "10px",
    border: "none",
    paddingLeft: "10px",
    background: "#2E1C41",
  };

  const whiteBox = {
    background: "#F8FDFD",
    float: "left",
  }
const blackBox = {
  background: "#202020",
  float: "right",
}
const downloadBtn = {
  background: "#643D89",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  marginTop: "10px",
}
const leftBox = {
  padding: "20px",
    width: "35%",
    float: "left"
}
const rightBox = {
  padding: "20px",
    width: "50%",
    float: "right"
}
const generateQR = () => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    input
  )}&size=200x200&color=ffffff&bgcolor=000000`;
  setQrUrl(url);
};

  return (
    <>
      <div style={containerStyle} className="qr-modal">
        <span style={leftBox}>
          <div >
            <div>Set color</div>
            <div >
              <div className="color-box" style={whiteBox} onClick={generateQR}></div>
              <div className="color-box" style={blackBox} onClick={generateQR}></div>
            </div>
          </div>
          <div>
          <div style={{ padding: 20 }}>
            {qrUrl && (
              <div style={{ marginTop: 20 }}>
                <img src={qrUrl} alt="QR Code" />
              </div>
            )}
          </div>
          </div>
          <div>
            <button style={downloadBtn} onClick={() => generateCode(input)}>Download</button>
          </div>
        </span>

        <span style={rightBox}>
          <div style={headingStyle}>
            <div><h3>QRcode </h3></div>
            <div>Generator</div>
          </div>
          <div>
            <div>Submit URL or text</div>
            <input type="text" style={inputStyle} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text or URL here"></input>
            <button style={downloadBtn} onClick={generateQR}>Generate</button>
          </div>
        </span>
      </div>
    </>
  );
}

export default App;
