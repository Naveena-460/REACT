import React from "react";

const Child = ({ message, episodes, gadgets, firstFriend, profile }) => {

  console.log("Child got props:", { message, episodes, gadgets, firstFriend, profile });

  return (
    <>
    <center>
    <div style={{ fontFamily: "Arial", padding: "10px",backgroundColor:"white" }}>

      <h1 style={{ color: "#1e88e5", marginBottom: "12px" }}>
         Props Received 
      </h1>

      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "#6a1b9a" }}>Message (String): </strong>
        <span style={{ color: "#424242" }}>{message}</span>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "#00838f" }}>Episodes (Number): </strong>
        <span style={{ color: "#424242" }}>{episodes}</span>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "#7b1fa2" }}>Gadgets (Array): </strong>
        <span style={{ color: "#424242" }}>
          {Array.isArray(gadgets) ? gadgets.join(", ") : gadgets}
        </span>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "#c62828" }}>First Friend (Object): </strong>
        <span style={{ color: "#424242" }}>
          {firstFriend ? `${firstFriend.name} — ${firstFriend.role}` : "No friend"}
        </span>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "#2e7d32" }}>Profile (Object): </strong>
        <span style={{ color: "#424242" }}>
          {profile ? `${profile.owner} — ${profile.color}` : "No profile"}
        </span>
      </div>

    </div>
    </center>
    </>
  );
};

export default Child;
