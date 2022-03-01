import axios from "axios";
import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  const handleClick = async () => {
    const { data } = await axios.get("/api/search");
    console.log(data);
  }

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => ({
  username: state.auth.username,
});

export default connect(mapState)(Home);
