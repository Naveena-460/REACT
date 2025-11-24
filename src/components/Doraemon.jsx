import { useState } from "react";
import nobitaImg from "../assets/nobita.jpg";
import shizukaImg from "../assets/shizu.jpg";

const Doraemon = () => {

  const [color, setColor] = useState("black");


  const [img, setImg] = useState("nobita");

 
  const [text, setText] = useState("Doraemon is Blue");

  
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [result, setResult] = useState(0);

 
  const [shape, setShape] = useState("circle");

  
  const changecolor = () => {
    setColor((prev) => (prev === "black" ? "yellow" : "black"));
  };

  const toggleimage = () => {
    setImg((prev) => (prev === "nobita" ? "shizuka" : "nobita"));
  };

  const changetext = () => {
    setText((prev) =>
      prev === "Doraemon is Blue" ? "Doraemon Loves Doracakes" : "Doraemon is Blue"
    );
  };

  const nextfibonumber = () => {
    const next = a + b;
    setResult(next);
    setA(b);
    setB(next);
  };

  const resetfibo = () => {
    setA(0);
    setB(1);
    setResult(0);
  };

  const changeshape = () => {
    setShape((prev) => {
      if (prev === "circle") return "square";
      if (prev === "square") return "rectangle";
      if (prev === "rectangle") return "triangle";
      return "circle";
    });
  };

  const imgSrc = img === "nobita" ? nobitaImg : shizukaImg;

  return (
    <>
      <div style={{ padding: 20, display: "grid", gap: 20, justifyContent: "center" }}>
       
        <div className="maincircle" style={{ textAlign: "center" }}>
          <div
            className="circle"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: color,
              margin: "0 auto 8px",
            }}
          />
          <button className="button" onClick={changecolor}>
            {color === "black" ? "ON" : "OFF"}
          </button>
        </div>

   
        <div className="mainbox" style={{ textAlign: "center" }}>
          <img
            src={imgSrc}
            alt={img}
            width={220}
            height={220}
            style={{ borderRadius: 12, objectFit: "cover" }}
          />
          <br />
          <button className="button" onClick={toggleimage} style={{ marginTop: 8 }}>
            {img === "nobita" ? "Show Shizuka" : "Show Nobita"}
          </button>
        </div>

        
        <div className="maintext" style={{ textAlign: "center" }}>
          <div className="text">
            <h2>{text}</h2>
          </div>
          <button className="button" onClick={changetext} style={{ marginTop: 8 }}>
            Change Text
          </button>
        </div>

        <div className="mainshape" style={{ textAlign: "center" }}>
          {shape === "circle" && (
            <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#ffd54f", margin: "0 auto 8px" }} />
          )}
          {shape === "square" && (
            <div style={{ width: 120, height: 120, background: "#ffab91", margin: "0 auto 8px" }} />
          )}
          {shape === "rectangle" && (
            <div style={{ width: 160, height: 100, background: "#b39ddb", margin: "0 auto 8px" }} />
          )}
          {shape === "triangle" && (
            <div style={{ width: 0, height: 0, borderLeft: "60px solid transparent", borderRight: "60px solid transparent", borderBottom: "120px solid #a5d6a7", margin: "0 auto 8px" }} />
          )}
          <button className="button" onClick={changeshape}>
            Change Shape
          </button>
        </div>

       
        <div className="mainfib" style={{ textAlign: "center" }}>
          <h1>Fibonacci Number</h1>
          <h2>{result}</h2>
          <div>
            <button className="button" onClick={nextfibonumber} style={{ margin: 8 }}>
              Next
            </button>
            <button className="button" onClick={resetfibo}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doraemon;
