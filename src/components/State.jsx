import { useState } from "react";
import doraemonImg from "../assets/dora.jpg";
import nobitaImg from "../assets/nobita.jpg";
import shizukaImg from "../assets/shizu.jpg";
const State=()=>{
//string
  const [name, setName] = useState("Doraemon");
  const [friend, setFriend] = useState("Nobita");
  const [gadget, setGadget] = useState("Anywhere Door");
  const [color, setColor] = useState("Blue");
  const [food, setFood] = useState("Doracake");
  const [place, setPlace] = useState("Tokyo");
//number

  const [age, setAge] = useState(10); 
  const [power, setPower] = useState(100);         
  const [gadgets, setGadgets] = useState(4); 
  const [missions, setMissions] = useState(20);

  //boolean

    const [isHappy, setIsHappy] = useState(true);        
  const [isInvisible, setIsInvisible] = useState(false);

  //array
  const [gadgetss, setGadgetss] = useState([
    "Anywhere Door",
    "Bamboo Copter",
    "Time Machine",
    "Small Light"
  ]);

 
  const [foods, setFoods] = useState([
    "Dorayaki",
    "Milk",
    "Bread",
    "Chocolate"
  ]);


  const [marks, setMarks] = useState([20, 35, 10, 5]);


  const [moods, setMoods] = useState([
    "Happy",
    "Sad",
    "Angry",
    "Excited"
  ]);

  //null
  
  const [gad, setGad] = useState(null);

  //object

  const [doraemon, setDoraemon] = useState({
    name: "Doraemon",
    gadget: "Anywhere Door",
    img:doraemonImg
  });

  const [nobita, setNobita] = useState({
    name: "Nobita",
    hobby: "Sleeping",
    img:nobitaImg
  });

  const [shizuka, setShizuka] = useState({
    name: "Shizuka",
    fav: " Music ",
    img: shizukaImg
  });

  return (
    <>
    <center>
    <div>
      <div>
        <h2>String Rendering</h2>
        <h3>Name: {name}</h3>
        <button onClick={() => setName("Robot Cat Doraemon")}>Change Name</button>
        <h3>Friend: {friend}</h3>
<button onClick={() => setFriend("Shizuka")}>Change Friend</button>
        <h3>Gadget: {gadget}</h3>
<button onClick={() => setGadget("Time Machine")}>Change Gadget</button>
        <h3>Color: {color}</h3>
<button onClick={() => setColor("Light Blue")}>Change Color</button>
        <h3>Favorite Food: {food}</h3>
 <button onClick={() => setFood("Dorayaki")}>Change Food  </button>
        <h3>Place: {place}</h3>
<button onClick={() => setPlace("Japan")}>Change Place</button>
        </div>
    
<div>
<h2>Number Rendering</h2>
<h3>Age:{age}</h3>
<button onClick={()=>setAge(age+1)}>Increase Age</button>
<h3>Power:{power}</h3>
<button onClick={()=>setPower(power+10)}>Boost power</button>
<h3>Total Gadgets: {gadgets}</h3>
<button onClick={() => setGadgets(gadgets + 1)}>Add Gadget</button>
<h3>Missions Completed: {missions}</h3>
<button onClick={()=> setMissions(missions + 5)}>Add Missions</button>
</div>

<div>
    <h2>Boolean</h2>
<h3>Doraemon Mood: {isHappy ? "Happy" : "Sad"}</h3>
 <button onClick={() => setIsHappy(!isHappy)}> Change Mood</button>
        <h3>Invisibility Mode: {isInvisible ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsInvisible(!isInvisible)}>Invisible</button>
</div>
<div>
<h2>Array</h2>
 <h3>Doraemon Gadgets</h3>
      {gadgetss.map((g, i) => (
        <p key={i}>{g}</p>
      ))}

      <h3>Favourite Foods</h3>
      {foods.map((f, i) => (
        <p key={i}>{f}</p>
      ))}

      <h3>Nobita Marks</h3>
      {marks.map((m, i) => (
        <p key={i}> Mark {i+1}: {m}</p>
      ))}

      <h3>Doraemon Moods</h3>
      {moods.map((mo,i)=>(
        <p key={i}>{mo}</p>
      ))}
</div>
      <div>
        <h2>Null</h2>
        <h3>{gad === null ? "No Gadget " : gad}</h3>

      <button onClick={() => setGad("Anywhere Door")}>Show Gadget</button>

      <button onClick={() => setGad(null)}>Clear</button>
        </div>
        <div>
            <h2>Object</h2>
            <h3>Doraemon</h3>
      <img src={doraemon.img} width="120" />
      <p>Name: {doraemon.name}</p>
      <p>Gadget: {doraemon.gadget}</p>

      <h3>Nobita</h3>
      <img src={nobita.img} width="120" />
      <p>Name: {nobita.name}</p>
      <p>Hobby: {nobita.hobby}</p>

      <h3>Shizuka</h3>
      <img src={shizuka.img} width="120" />
      <p>Name: {shizuka.name}</p>
      <p>Fav: {shizuka.fav}</p>
            </div>
      </div>
      </center>
    </>
  );



}
export default State;