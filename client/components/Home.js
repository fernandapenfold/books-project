import axios from "axios";
import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  const handleClick = async () => {
    const books = await axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCz2qWp-Cl_rlMn6eTlf0AZOhtO4sDArOI")
    console.log(books);
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
