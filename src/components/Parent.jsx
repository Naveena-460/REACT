
import React from "react";
import Child from "./Child";

const Parent = () => {
 
  const message = "Hellow Doraemon!";         
  const episodes = 13;                                         
  const gadgets = ["Anywhere Door", "Bamboo-Copter", "Time Cloth"]; 
  const friends = [                                           
    { id: 1, name: "Nobita", role: "Friend" },
    { id: 2, name: "Shizuka", role: "Friend" }
  ];
  const profile = { owner: "Doraemon", color: "blue" };     

  return (
    <div>
     
      <Child
        message={message}
        episodes={episodes}
        gadgets={gadgets}
        firstFriend={friends[0]}
        profile={profile}
      />
    </div>
  );
};

export default Parent;
