import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  console.log(user);
  return (
    <div>
      <h1>Dashboard </h1>
      {user.photoURL && <img src={user.photoURL} />}
      <h2 id="name">Name : {user.displayName}</h2>
      <h2 id="email-user">Email : {user.email}</h2>
      <button onClick={logoutUser} id="logout">Log out</button>
    </div>
  );
};

export default Dashboard;